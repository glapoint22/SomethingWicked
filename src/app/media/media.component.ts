import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContentWindowService } from "../content-window.service";

@Component({
  template: ''
})
export class MediaComponent implements OnInit, OnDestroy {

  constructor(private contentWindowService: ContentWindowService) { }

  ngOnInit() {
    this.contentWindowService.showContentWindow();
  }

  ngOnDestroy(){
    this.contentWindowService.hideContentWindow();
  }

}
