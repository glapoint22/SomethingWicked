import { Component, OnInit  } from '@angular/core';
import { fade } from "../animations";
import { ContentWindowService } from "../content-window.service";

@Component({
  selector: 'content-window',
  templateUrl: './content-window.component.html',
  styleUrls: ['./content-window.component.scss'],
  animations: [fade]
})
export class ContentWindowComponent implements OnInit {
  constructor(private contentWindowService: ContentWindowService){}

  ngOnInit() {
  }

  
}
