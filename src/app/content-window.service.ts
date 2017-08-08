import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from "@angular/http";

@Injectable()
export class ContentWindowService {
  public fadeState: string = 'hidden';
  public display: string = 'none';
  public title: string = '';
  public data: string[] = [];
  public index: number = 0;

  constructor(private router: Router, private http: Http){}

  onAnimationStart(event): void{
    if(event.toState == 'visible'){
      this.display = 'block';
    }
  }

  onAnimationDone(event): void{
    if(event.fromState == 'visible' && !event.element.classList.contains('ng-animate-queued')){
      this.display = 'none';
    }
  }

   showContentWindow(): void{
    this.fadeState = 'visible';
  }

  hideContentWindow(): void{
    this.fadeState = 'hidden';
  }

  onArrowClick(direction: number): void{
    this.index += direction;
    this.index = Math.max(0, Math.min(this.index, this.data.length - 1));

    this.router.navigate([], { queryParams: { id: this.data[this.index] } })
  }

  getContent(url: string){
    return this.http
    .get(url)
    .map((response: Response) => response.json())
  }

  setContent(content, startingId){
    let properties = Object.keys(content);

    this.data = content[properties[1]].data.map(data => data.id);
    this.title = content[properties[0]];
    this.index = Math.max(0, this.data.indexOf(startingId));
  }
}
