import { Component } from '@angular/core';
import { MediaComponent } from "../media/media.component";

@Component({
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent extends MediaComponent  {}