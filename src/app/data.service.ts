import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MediaGroups } from "./classes/mediaGroups";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private mediaGroupsData$: BehaviorSubject<MediaGroups> = new BehaviorSubject(new MediaGroups());

  //-----------------------------------------------------------------------------------------------------------constructor---------------------------------------------------------------------------------
  constructor(private http: Http) {
    http
      .get('api/MediaGroups')
      .map((response: Response) => response.json())
      .subscribe(
        data => this.mediaGroupsData$.next(data),
        err => console.log(err)
      )
  }
  
  //------------------------------------------------------------------------------------------------------------getMediaGroupsData---------------------------------------------------------------------------------
  getMediaGroupsData(): Observable<MediaGroups> {
    return this.mediaGroupsData$.asObservable();
  }


  //-----------------------------------------------------------------------------------------------------------------get---------------------------------------------------------------------------------
  get(url: string): Observable<Response> {
    return this.http.get(url)
      .map((response: Response) => response.json())
  }
}