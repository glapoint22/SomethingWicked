import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { ShowcaseImage } from "../classes/showcaseImage";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-showcase-images',
  templateUrl: './showcase-images.component.html',
  styleUrls: ['./showcase-images.component.scss'],
  animations: [
    trigger('imageState', [
      state('hidden', style({
        opacity: 0,
      })),
      state('visible',   style({
        opacity: 1,
      })),
      transition('hidden <=> visible', animate('0.5s ease-in-out'))
    ])
  ]
})
export class ShowcaseImagesComponent implements OnInit {
  public showcaseImages: ShowcaseImage[];
  public currentImageIndex: number = 0;
  public currentTimer: number = 0;

  constructor(private dataService: DataService) { }

  //----------------------------------------------------------------ngOnInit-------------------------------------------------------
  ngOnInit() {
    //Get the showcase images
    this.dataService.data
      .subscribe((response) =>{
        //Assign the images
        this.showcaseImages = <ShowcaseImage[]>response.showcaseImages;

        //Set the visible and hidden states
        for(let i = 0; i < this.showcaseImages.length; i++){
          if(i ==0){
            this.showcaseImages[i].state = 'visible';
          }else{
            this.showcaseImages[i].state = 'hidden';
          }
        }

        //Kick off the slide
        this.startSlide();
      });
  }
  //----------------------------------------------------------------startSlide-------------------------------------------------------
  startSlide(): void{
    this.currentTimer = window.setInterval(() => {
        //Hide the current image and then increment the next image
        this.showcaseImages[this.currentImageIndex].state = 'hidden';
        this.currentImageIndex++;
        this.currentImageIndex = this.currentImageIndex % this.showcaseImages.length;

        //Show the current image
        this.showcaseImages[this.currentImageIndex].state = 'visible';
    }, 10000);
  }
}