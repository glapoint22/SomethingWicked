import { Injectable } from '@angular/core';

@Injectable()
export class ContentWindowService {
  public fadeState = 'hidden';
  public display = 'none';

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

}
