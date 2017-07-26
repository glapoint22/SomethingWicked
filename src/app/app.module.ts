//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShowcaseImagesComponent } from './showcase-images/showcase-images.component';
import { LoadComponent } from './load/load.component';

//Services
import { DataService } from "./data.service";
import { TourComponent } from './tour/tour.component';
import { MusicComponent } from './music/music.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ShowcaseImagesComponent,
    LoadComponent,
    TourComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
