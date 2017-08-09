import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContentWindowService } from "../content-window.service";

@Component({
  template: ''
})
export class MediaComponent implements OnInit, OnDestroy {
  constructor(public contentWindowService: ContentWindowService) { }

  ngOnInit() {
    //Show the content window
    this.contentWindowService.showContentWindow();
  }

  ngOnDestroy() {
    //Hide the content window
    this.contentWindowService.hideContentWindow();
  }

  displayContent(id: string): void { }
}