import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from "@angular/http";

@Injectable()
export class ContentWindowService {
  public fadeState: string = 'hidden';
  public display: string = 'none';
  public content = null;
  public isLoaded: boolean = false;
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
      this.isLoaded = false;
      if(this.content){
        this.content = null;
      }
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
    this.index = Math.max(0, Math.min(this.index, this.content.data.length - 1));

    this.router.navigate([], { queryParams: { id: this.content.data[this.index].id } });
  }

  getContent(url: string){
    return this.http
    .get(url)
    .map((response: Response) => response.json())
  }

  setContent(content, startingId){
    this.content = content;
    if(content.data)this.index = Math.max(0, this.content.data.map(data => data.id).indexOf(startingId));
  }
}
