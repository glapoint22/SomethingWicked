import { Component } from '@angular/core';
import { MediaSingleComponent } from "../media-single/media-single.component";

@Component({
  selector: 'bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.scss']
})
export class BiosComponent extends MediaSingleComponent {
  public bio: string;
  public thumbnail: string;

  displayContent(content): void{
    this.bio = content.bio;
    this.thumbnail = `assets/images/members/${content.thumbnail}`;
  }
}
