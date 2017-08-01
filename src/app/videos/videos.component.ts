import { Component, OnInit } from '@angular/core';
import { ContentWindowService } from "../content-window.service";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  constructor(private contentWindowService: ContentWindowService) { }

  ngOnInit() {
    this.contentWindowService.fadeState = 'visible';
    this.contentWindowService.display = 'block';
  }
}
