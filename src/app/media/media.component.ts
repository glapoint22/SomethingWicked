import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContentWindowService } from "../content-window.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  template: ''
})
export class MediaComponent implements OnInit, OnDestroy {
  constructor(public contentWindowService: ContentWindowService, private route: ActivatedRoute) { }

  ngOnInit() {
    //Show the content window
    this.contentWindowService.showContentWindow();

    this.route.queryParamMap.subscribe(queryParams => {
      let queryParam: string = queryParams.get('id'), contentType: string, param: string;

      //If we have no data yet...
      if (this.contentWindowService.data.length === 0) {
        //Get the id
        this.route.paramMap.subscribe(params => param = params.get('id'));

        //Get the content type
        this.route.url.subscribe(urlSegment => contentType = urlSegment[0].path);

        //Get the data
        this.contentWindowService
          .getContent(`api/${contentType}/${param}`)
          .subscribe(content => {
            this.contentWindowService.setContent(content, queryParam);
            this.displayContent(queryParam);
          });
          return;
      }
      this.displayContent(queryParam);
    });
  }

  ngOnDestroy() {
    //Hide the content window
    this.contentWindowService.hideContentWindow();
  }

  displayContent(id: string): void { }
}