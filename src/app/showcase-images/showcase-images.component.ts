//Imports
import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { ShowcaseImage } from "../classes/showcaseImage";
import { HostListener } from '@angular/core';
import { fade } from "../animations";

//Decorator
@Component({
  selector: 'app-showcase-images',
  templateUrl: './showcase-images.component.html',
  styleUrls: ['./showcase-images.component.scss'],
  animations: [fade]
})

//Class
export class ShowcaseImagesComponent implements OnInit {
  public images: ShowcaseImage[];
  public showcaseImages: ShowcaseImage[] = [];
  public currentImageIndex: number = 0;
  public interval: number = 0;
  public height: number;
  public isLoaded: boolean = false;
  public arrowsFadeState: string = 'hidden';
  public arrowsDisplay: string = 'none';

  constructor(private dataService: DataService) { }

  //-----------------------------------------------------------------------------------------------------------ngOnInit---------------------------------------------------------------------------------
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
          this.images[i].fadeState = 'hidden';
        }

        //Push the first image into the array
        this.showcaseImages.push(this.images[0]);
      });
  }
  //-----------------------------------------------------------------------------------------------------------startTimer-------------------------------------------------------------------------------
  startTimer(direction: number): void{
    this.interval = window.setInterval(() => {
      this.showNextImg(direction);
    }, 10000);
  }
  //-----------------------------------------------------------------------------------------------------------showNextImg-------------------------------------------------------------------------------
  showNextImg(direction: number): void{
    //Hide the current image
    this.showcaseImages[this.currentImageIndex].fadeState = 'hidden';

    //Set the next image index based on the direction
    this.currentImageIndex += direction;
    if(this.currentImageIndex < 0){
      this.currentImageIndex = this.showcaseImages.length - 1;
    }else{
      this.currentImageIndex = this.currentImageIndex % this.showcaseImages.length;
    }

    //Show the image
    this.showcaseImages[this.currentImageIndex].fadeState = 'visible';
  }

  //-----------------------------------------------------------------------------------------------------------onArrowClick---------------------------------------------------------------------------
  onArrowClick(direction: number): void{
    //Stop the timer
    window.clearInterval(this.interval);

    //Go to the next image and restart the timer
    this.showNextImg(direction);
    this.startTimer(direction);
  }

  //-----------------------------------------------------------------------------------------------------------setHeight-------------------------------------------------------------------------------
  setHeight(): void{
    let navBarHeight = 80, maxWindowWidth = 1920;

    //compute the height
    if (window.innerWidth > 1800 && window.innerHeight <= 1080) {
        this.height = (window.innerHeight - navBarHeight) / maxWindowWidth * 100;
    } else {
        this.height = 56.25;
    }
  }

  //-----------------------------------------------------------------------------------------------------------onResize-------------------------------------------------------------------------------
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setHeight();
  }

  //-----------------------------------------------------------------------------------------------------------onImageLoad---------------------------------------------------------------------------
  onImageLoad(): void{
    //When the fisrt image has loaded, display the image and hide the loading mask
    if(this.showcaseImages.length == 1){
      this.showcaseImages[0].fadeState = 'visible';
      this.isLoaded = true;
    }

    //Load the rest of the images
    if(this.images.length > this.showcaseImages.length){
      this.showcaseImages.push(this.images[this.showcaseImages.length]);
    }else{
      //All images are loaded so start the timer for the slide and display the arrows
      this.startTimer(1);
      this.arrowsDisplay = 'block';
      this.arrowsFadeState = 'visible';
    }
  }
}