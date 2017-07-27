import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Observable }     from 'rxjs/Observable';
import { MediaGroup } from "../classes/mediaGroup";

@Component({
  selector: 'videos',
  templateUrl: './videos.component.html'
})
export class VideosComponent implements OnInit {
  private videos: Observable<MediaGroup>;

  constructor(private http: Http) { }

  //-----------------------------------------------------------------------------------------------------------ngOnInit---------------------------------------------------------------------------------
  ngOnInit() {
    let url: string = 'https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCOwoh6rDLkrR7ZJ7WQma3CQ&key=AIzaSyCoYYlTbahgZpUKO7jH0oOUZkArfeTIr_w';
    //Get the videos
    this.videos = this.http
    .get(url)
    .map(response => response.json().items
    .map(item => new MediaGroup(item.id, item.snippet.title, item.snippet.thumbnails.medium.url)))
  }

  //----------------------------------------------------------------------------------------------------------showVideos---------------------------------------------------------------------------------
  showVideos(playlistId: string): void{
    console.log(playlistId);
  }
}
