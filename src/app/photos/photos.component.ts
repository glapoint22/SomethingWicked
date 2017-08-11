import { Component } from '@angular/core';
import { MediaCollectionsComponent } from "../media-collections/media-Collections.component";

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent extends MediaCollectionsComponent {
  public translate: string;
  private counter: number = 0;

  displayContent(photoID: string): void{
    let index: number = this.contentWindowService.content.data.map(data => data.id).indexOf(photoID);
    this.translate = 'translateX(' + -index * 100 + '%)'
  }

  onLoad(){
    this.counter ++;
    if(this.counter === this.contentWindowService.content.data.length){
      this.contentWindowService.isLoaded = true;
    }
  }
}
