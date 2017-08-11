import { Component } from '@angular/core';
import { MediaCollectionsComponent } from "../media-collections/media-Collections.component";

@Component({
  selector: 'videos',
  template: `<iframe id="iframe" style="border: none; overflow: hidden; margin-top: 7vh" 
            scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" 
            (load)="onLoad()"></iframe>`
})
export class VideosComponent extends MediaCollectionsComponent {
  iframe;
  displayContent(videoID: string): void{
    this.contentWindowService.isLoaded = false;
    this.iframe = document.getElementById('iframe');
    let iWindow = (<HTMLIFrameElement> this.iframe).contentWindow;
    iWindow.location.replace(`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSomethingWickedRocksband%2Fvideos%2F${videoID}%2F`);
  }

  onLoad(){
    if(this.iframe){
      this.contentWindowService.isLoaded = true;
    }
  }
}