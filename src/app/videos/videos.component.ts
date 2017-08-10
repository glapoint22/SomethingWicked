import { Component } from '@angular/core';
import { MediaCollectionsComponent } from "../media-collections/media-Collections.component";

@Component({
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent extends MediaCollectionsComponent {
  displayContent(videoID: string): void{
    let iframe = document.getElementById('iframe');
    let iWindow = (<HTMLIFrameElement> iframe).contentWindow;
    iWindow.location.replace(`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSomethingWickedRocksband%2Fvideos%2F${videoID}%2F`);
  }
}