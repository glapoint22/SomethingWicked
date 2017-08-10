import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router } from '@angular/router';

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
  display: string = 'none';

  constructor(private router: Router){}

  //----------------------------------------------------------------------------------menuClick----------------------------------------------------------------------------
  menuClick(): void {
    this.isVisible = !this.isVisible;
    this.state = this.isVisible ? this.state = 'active' : this.state = 'inactive';
  }

  //-------------------------------------------------------------------------------onAnimationStart----------------------------------------------------------------------------
  onAnimationStart(event): void{
    if(event.fromState == 'inactive'){
      this.display = 'block';
    }
  }

  //-------------------------------------------------------------------------------onAnimationDone----------------------------------------------------------------------------
  onAnimationDone(event): void{
    if(event.fromState == 'active'){
      this.display = 'none';
    }
  }

  scrollTo(id: string): void{
    this.router.navigate(['/']);
    var yOffset = id === 'top' ? 80 : 70,
            duration = 500,
            element = document.getElementById(id),
            rect = element.getBoundingClientRect(),
            elementPos = rect.top,
            body = document.scrollingElement || document.documentElement,
            to = elementPos + body.scrollTop - yOffset,
            start = body.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20,
            animateScroll = function () {
                var val;

                currentTime += increment;
                val = easeInOutQuad(currentTime, start, change, duration);
                body.scrollTop = val;
                if (currentTime < duration) {
                    window.setTimeout(animateScroll, increment);
                }
            };
    animateScroll();
      
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
  }
}