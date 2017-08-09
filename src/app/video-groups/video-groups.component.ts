import { Component, OnInit } from '@angular/core';
import { MediaGroup } from "../classes/mediaGroup";
import { DataService } from "../data.service";
import { Router } from '@angular/router';
import { ContentWindowService } from "../content-window.service";

@Component({
  selector: 'video-groups',
  templateUrl: './video-groups.component.html'
})
export class VideoGroupsComponent implements OnInit {
  private videoGroups: MediaGroup[];

  constructor(private dataService: DataService, private router: Router, private contentWindowService: ContentWindowService) { }

  //-----------------------------------------------------------------------------------------------------------ngOnInit---------------------------------------------------------------------------------
  ngOnInit() {
    //Get the video groups
    this.dataService.getData().subscribe(response => {
      this.videoGroups = response.videoGroups;
    });
  }

  //----------------------------------------------------------------------------------------------------------showVideos---------------------------------------------------------------------------------
  showVideos(videoGroupId: string): void{
    this.contentWindowService.showContentWindow();
    this.contentWindowService
      .getContent(`api/videos/${videoGroupId}`)
      .subscribe(content => {
        this.contentWindowService.setContent(content, '');
        this.router.navigate(['/videos', videoGroupId], { queryParams: { id: this.contentWindowService.content.data[0].id } });
      });
  }
}
