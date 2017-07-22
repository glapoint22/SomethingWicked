//Imports
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
import { HostListener } from '@angular/core';

//Decorator
@Component({
  selector: 'app-showcase-images',
  templateUrl: './showcase-images.component.html',
  styleUrls: ['./showcase-images.component.scss'],
  animations: [
    trigger('visibleState', [
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

//Class
export class ShowcaseImagesComponent implements OnInit {
  public images: ShowcaseImage[];
  public showcaseImages: ShowcaseImage[] = [];
  public currentImageIndex: number = 0;
  public currentTimer: number = 0;
  public height: number;
  public loadState = 'visible';
  public visibility = "hidden";

  constructor(private dataService: DataService) { }

  //-----------------------------------------------------------------------------------------------------------ngOnInit------------------------------------------------------------------------------------------------
  ngOnInit() {
    //Set the image height
    this.setHeight();

    //Get the showcase images
    this.dataService.data
      .subscribe((response) =>{
        //Assign the images
        this.images = <ShowcaseImage[]>response.showcaseImages;
        
        //Set the states to hidden
        for(let i = 0; i < this.images.length; i++){
          this.images[i].state = 'hidden';
        }

        //Push the first image into the array
        this.showcaseImages.push(this.images[0]);
      });
  }
  //-----------------------------------------------------------------------------------------------------------startTimer----------------------------------------------------------------------------------------------
  startTimer(direction: number): void{
    this.currentTimer = window.setInterval(() => {
      this.showNextImg(direction);
    }, 10000);
  }
  //-----------------------------------------------------------------------------------------------------------showNextImg----------------------------------------------------------------------------------------------
  showNextImg(direction: number): void{
    //Hide the current image
    this.showcaseImages[this.currentImageIndex].state = 'hidden';

    //Set the next image index based on the direction
    this.currentImageIndex += direction;
    if(this.currentImageIndex < 0){
      this.currentImageIndex = this.showcaseImages.length - 1;
    }else{
      this.currentImageIndex = this.currentImageIndex % this.showcaseImages.length;
    }

    //Show the image
    this.showcaseImages[this.currentImageIndex].state = 'visible';
  }

  //-----------------------------------------------------------------------------------------------------------onArrowClick----------------------------------------------------------------------------------------------
  onArrowClick(direction: number): void{
    //Stop the timer
    window.clearInterval(this.currentTimer);

    //Go to the next image and restart the timer
    this.showNextImg(direction);
    this.startTimer(direction);
  }

  //-----------------------------------------------------------------------------------------------------------setHeight----------------------------------------------------------------------------------------------
  setHeight(): void{
    let navBarHeight = 80, maxWindowWidth = 1920;

    //compute the height
    if (window.innerWidth > 1800 && window.innerHeight <= 1080) {
        this.height = (window.innerHeight - navBarHeight) / maxWindowWidth * 100;
    } else {
        this.height = 56.25;
    }
  }

  //-----------------------------------------------------------------------------------------------------------onResize----------------------------------------------------------------------------------------------
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setHeight();
  }

  //-----------------------------------------------------------------------------------------------------------onImageLoad----------------------------------------------------------------------------------------------
  onImageLoad(): void{
    if(this.showcaseImages.length == 1){
      this.showcaseImages[0].state = 'visible';
      this.loadState = 'hidden';

      //Start the timer for the slide
      this.startTimer(1);
    }

    if(this.images.length > this.showcaseImages.length){
      this.showcaseImages.push(this.images[this.showcaseImages.length]);
    }
  }

  //---------------------------------------------------------------------------------------------------------onAnimationStart----------------------------------------------------------------------------------------------
  onAnimationStart(event): void{
    if(event.fromState == 'void'){
      this.visibility = 'visible';
    }
  }

  //---------------------------------------------------------------------------------------------------------onAnimationDone----------------------------------------------------------------------------------------------
  onAnimationDone(event): void{
    if(event.fromState == 'visible'){
      this.visibility = 'hidden';
    }
  }
}