import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('menuState', [
      state('inactive', style({
            opacity: 0,
            paddingTop: '0'
      })),
      state('active',   style({
        opacity: 1,
        paddingTop: '4px'
      })),
      transition('inactive <=> active', animate('0.2s ease-in-out'))
    ])
  ]
})
export class NavigationComponent {
  isVisible: boolean = false;
  state: string = 'inactive';

  //Show or hide the mobile menu
  menuClick(): void {
        this.isVisible = !this.isVisible;
        this.state = this.isVisible ? this.state = 'active' : this.state = 'inactive';
  }
}
