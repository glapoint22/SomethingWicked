import { Component, OnInit } from '@angular/core';
import { MediaGroup } from "../classes/mediaGroup";
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'video-groups',
  templateUrl: './video-groups.component.html'
})
export class VideoGroupsComponent implements OnInit {
  private videoGroups: MediaGroup[];

  constructor(private dataService: DataService, private router: Router) { }

  //-----------------------------------------------------------------------------------------------------------ngOnInit---------------------------------------------------------------------------------
  ngOnInit() {
    //Get the video groups
    this.dataService.getData().subscribe(response => {
      this.videoGroups = response.videoGroups;
    });
  }

  //----------------------------------------------------------------------------------------------------------showVideos---------------------------------------------------------------------------------
  showVideos(videoGroupId: string): void{
    this.router.navigate(['/videos', videoGroupId])
  }
}
