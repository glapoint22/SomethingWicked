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
import { VideoGroupsComponent } from './video-groups/video-groups.component';
import { PhotoGroupsComponent } from './photo-groups/photo-groups.component';
import { MembersComponent } from './members/members.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ContentWindowComponent } from './content-window/content-window.component';
import { PhotosComponent } from './photos/photos.component';
import { MediaComponent } from './media/media.component';
import { BiosComponent } from './bios/bios.component';
import { TourComponent } from './tour/tour.component';
import { MusicComponent } from './music/music.component';
import { VideosComponent } from './videos/videos.component';
import { MediaSingleComponent } from './media-single/media-single.component';
import { MediaGroupsComponent } from './media-groups/media-groups.component';

//Services
import { DataService } from "./data.service";
import { ContentWindowService } from "./content-window.service";




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ShowcaseImagesComponent,
    LoadComponent,
    TourComponent,
    MusicComponent,
    VideoGroupsComponent,
    PhotoGroupsComponent,
    MembersComponent,
    SocialMediaComponent,
    ContentWindowComponent,
    VideosComponent,
    PhotosComponent,
    MediaComponent,
    BiosComponent,
    MediaSingleComponent,
    MediaGroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [DataService, ContentWindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
