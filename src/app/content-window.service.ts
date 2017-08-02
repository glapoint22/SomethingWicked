import { Injectable } from '@angular/core';

@Injectable()
export class ContentWindowService {
  public fadeState = 'hidden';
  public display = 'none';

  onAnimationDone(event): void{
    if(event.fromState == 'visible'){
      this.display = 'none';
    }
  }

   showContentWindow(): void{
    this.fadeState = 'visible';
    this.display = 'block';
  }

  hideContentWindow(): void{
    this.fadeState = 'hidden';
  }

}
