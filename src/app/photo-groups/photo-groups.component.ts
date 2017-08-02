import { Component, OnInit } from '@angular/core';
import { MediaGroup } from "../classes/mediaGroup";
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'photo-groups',
  templateUrl: './photo-groups.component.html'
})
export class PhotoGroupsComponent implements OnInit {
  private photoGroups: MediaGroup[];

  constructor(private dataService: DataService, private router: Router) { }

  //-----------------------------------------------------------------------------------------------------------ngOnInit---------------------------------------------------------------------------------
  ngOnInit() {
     //Get the photo groups
    this.dataService.getData().subscribe(response => {
      this.photoGroups = response.photoGroups;
    });
  }

  //----------------------------------------------------------------------------------------------------------showPhotos---------------------------------------------------------------------------------
  showPhotos(photoGroupId: string): void{
    this.router.navigate(['/photos', photoGroupId])
  }
}
