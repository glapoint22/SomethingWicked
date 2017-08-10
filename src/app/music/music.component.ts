import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Song } from "../classes/song";
import { Router } from '@angular/router';

@Component({
  selector: 'music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  public songs: Song[];
  private sortColumn: string = 'name';
  private isDescending: boolean = false;

  constructor(private dataService: DataService, private router: Router) { }

  //-----------------------------------------------------------------------------------------------------------ngOnInit---------------------------------------------------------------------------------
  ngOnInit() {
    //Get the songs
    this.dataService.getData().subscribe(response => this.songs = response.songs);
  }

  //---------------------------------------------------------------------------------------------------------getSortClass---------------------------------------------------------------------------------
  getSortClass(column: string): string {
    if (column === this.sortColumn) {
      return (this.isDescending) ? 'arrow-down' : 'arrow-up';
    }
    return '';
  }

  //--------------------------------------------------------------------------------------------------------------sort--------------------------------------------------------------------------------------
  sort(column: string): void {
    //Assign the column that will be sorted and figure out if it will be asc or desc
    this.isDescending = (column === this.sortColumn) ? !this.isDescending : false;
    this.sortColumn = column;

    //Sort the songs array based on the sort column and if it asc or desc
    this.songs.sort((a, b): number => {
      let comparison: number = 0;

      //This is the sorting logic
      if (a[this.sortColumn] > b[this.sortColumn]){
        comparison = 1;
      }else if (a[this.sortColumn] < b[this.sortColumn]){
        comparison = -1;
      }
      return (this.isDescending)? comparison * -1: comparison;
    })
  }

  //----------------------------------------------------------------------------------------------------------showVideo--------------------------------------------------------------------------------------
  showVideo(videoGroupId: string, videoId: string): void{
    this.router.navigate(['/videos', videoGroupId], { queryParams: { id: videoId } });
  }
}
