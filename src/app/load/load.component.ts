import { Component, Input } from '@angular/core';
import { fade } from "../animations";
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss'],
  animations: [trigger('fadeState', [
    state('hidden', style({
      opacity: 0,
    })),
    state('visible',   style({
      opacity: 1,
    })),
    transition('visible => hidden', animate('0.5s ease-in-out'))
  ])]
})
export class LoadComponent {
  public fadeState = 'visible';
  public display = 'flex';

  
  @Input()
  set isLoaded(isLoaded: boolean){
    if(isLoaded){
      this.fadeState = 'hidden';
    }else{
      this.fadeState = 'visible';
    }
  }
  
  //----------------------------------------------------------------------------------onAnimationDone----------------------------------------------------------------------------
  onAnimationDone(event): void{
    if(event.fromState == 'visible'){
      this.display = 'none';
    }
    if(event.fromState == 'hidden'){
      this.display = 'flex';
    }
  }
}
