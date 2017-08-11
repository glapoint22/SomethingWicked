import { Component, OnInit } from '@angular/core';
import { MediaComponent } from "../media/media.component";
import { ActivatedRoute } from '@angular/router';
import { ContentWindowService } from "../content-window.service";

@Component({
  selector: 'app-media-groups',
  templateUrl: './media-groups.component.html',
  styleUrls: ['./media-groups.component.scss']
})
export class MediaGroupsComponent extends MediaComponent implements OnInit {

  constructor(contentWindowService: ContentWindowService, private route: ActivatedRoute) { 
    super(contentWindowService);
  }

  ngOnInit() {
    super.ngOnInit();
    
    this.route.queryParamMap.subscribe(queryParams => {
      let queryParam: string = queryParams.get('id'), contentType: string, param: string;

      //If we have no data yet...
      if (this.contentWindowService.content === null) {
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

}
