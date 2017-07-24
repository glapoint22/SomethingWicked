import {trigger, state, style, animate, transition} from '@angular/animations';

export const fade = trigger('fadeState', [
      state('hidden', style({
        opacity: 0,
      })),
      state('visible',   style({
        opacity: 1,
      })),
      transition('hidden <=> visible', animate('0.5s ease-in-out'))
    ]);