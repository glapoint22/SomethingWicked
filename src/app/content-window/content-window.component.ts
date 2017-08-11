import { Component  } from '@angular/core';
import { fade } from "../animations";
import { ContentWindowService } from "../content-window.service";
import { Router } from '@angular/router';

@Component({
  selector: 'content-window',
  templateUrl: './content-window.component.html',
  styleUrls: ['./content-window.component.scss'],
  animations: [fade]
})
export class ContentWindowComponent {
  constructor(public contentWindowService: ContentWindowService, private router: Router){}

  close():void{
    this.router.navigate(['/']);
    this.contentWindowService.hideContentWindow();
  }

  stopPropagation(event): void{
    event.stopPropagation();
  }
}
