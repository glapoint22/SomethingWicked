import { Component } from '@angular/core';
import { MediaComponent } from "../media/media.component";

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent extends MediaComponent {}
