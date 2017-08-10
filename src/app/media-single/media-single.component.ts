import { Component, OnInit } from '@angular/core';
import { MediaComponent } from "../media/media.component";
import { ContentWindowService } from "../content-window.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  template: ''
})
export class MediaSingleComponent extends MediaComponent {

  constructor(contentWindowService: ContentWindowService, private route: ActivatedRoute) { 
    super(contentWindowService);
  }

  ngOnInit() {
    super.ngOnInit();

    this.route.paramMap.subscribe(params =>{
      let contentType: string, param: string = params.get('id');

      //Get the content type
      this.route.url.subscribe(urlSegment => contentType = urlSegment[0].path);

      //Get the data
      this.contentWindowService
        .getContent(`api/${contentType}/${param}`)
        .subscribe(content => {
          this.contentWindowService.setContent(content, '');
          this.displayContent(content);
        });
    });
  }
}
