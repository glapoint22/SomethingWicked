import { Component } from '@angular/core';
import { MediaCollectionComponent } from "../media-collection/media-Collection.component";

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent extends MediaCollectionComponent {
  public translate: string;

  displayContent(photoID: string): void{
    let index: number = this.contentWindowService.content.data.map(data => data.id).indexOf(photoID);
    this.translate = 'translateX(' + -index * 100 + '%)'
  }
}
