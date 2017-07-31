import { Component, OnInit } from '@angular/core';
import { MediaGroup } from "../classes/mediaGroup";
import { DataService } from "../data.service";

@Component({
  selector: 'photo-groups',
  templateUrl: './photo-groups.component.html'
})
export class PhotoGroupsComponent implements OnInit {
  private photoGroups: MediaGroup[];

  constructor(private dataService: DataService) { }

  //-----------------------------------------------------------------------------------------------------------ngOnInit---------------------------------------------------------------------------------
  ngOnInit() {
     //Get the photo groups
    this.dataService.getData().subscribe(response => {
      this.photoGroups = response.photoGroups;
    });
  }

  //----------------------------------------------------------------------------------------------------------showPhotos---------------------------------------------------------------------------------
  showPhotos(photoGroupId: string): void{
    console.log(photoGroupId);
  }
}
