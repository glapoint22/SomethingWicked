import { Component } from '@angular/core';
import { MediaComponent } from "../media/media.component";
import {  ActivatedRoute } from '@angular/router';
import { ContentWindowService } from "../content-window.service";

@Component({
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent extends MediaComponent {
  constructor(contentWindowService: ContentWindowService, route: ActivatedRoute){
    //Call the parent class
    super(contentWindowService, route);
  }

  displayContent(id: string): void{
    let iframe = document.getElementById('iframe');
    let iWindow = (<HTMLIFrameElement> iframe).contentWindow;
    iWindow.location.replace(`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSomethingWickedRocksband%2Fvideos%2F${id}%2F`);
  }
}