import { Component, Input } from '@angular/core';
import { fade } from "../animations";

@Component({
  selector: 'load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss'],
  animations: [fade]
})
export class LoadComponent {
  public fadeState = 'visible';
  public display = 'flex';

  
  @Input()
  set isLoaded(isLoaded: boolean){
    if(isLoaded){
      this.fadeState = 'hidden';
    }
  }
  
  //----------------------------------------------------------------------------------onAnimationDone----------------------------------------------------------------------------
  onAnimationDone(event): void{
    if(event.fromState == 'visible'){
      this.display = 'none';
    }
  }
}
