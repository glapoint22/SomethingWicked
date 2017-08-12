import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable }     from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Data } from "./classes/data";
import { MediaGroups } from "./classes/mediaGroups";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private data$: BehaviorSubject<Data> = new BehaviorSubject(new Data());
  private mediaGroupsData$: BehaviorSubject<MediaGroups> = new BehaviorSubject(new MediaGroups());

  //-----------------------------------------------------------------------------------------------------------constructor---------------------------------------------------------------------------------
  constructor(private http: Http) { 
    http
    .get('api/Data')
    .map((response: Response) => response.json())
    .subscribe(
      data => this.data$.next(data),
      err => console.log(err)
    )

    http
    .get('api/MediaGroups')
    .map((response: Response) => response.json())
    .subscribe(
      data => this.mediaGroupsData$.next(data),
      err => console.log(err)
    )
  }
  
  //------------------------------------------------------------------------------------------------------------getData---------------------------------------------------------------------------------
  getData(): Observable<Data> {
    return this.data$.asObservable();
  }

  //------------------------------------------------------------------------------------------------------------getMediaGroupsData---------------------------------------------------------------------------------
  getMediaGroupsData(): Observable<MediaGroups> {
    return this.mediaGroupsData$.asObservable();
  }
}
