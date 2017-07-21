import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable }     from 'rxjs/Observable';
import { Data } from "./classes/data";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  data: Observable<Data>;
  constructor(private http: Http) { }

  getData(): void{
    this.data = this.http
      .get('api/Data')
      .map((response: Response) => response.json());
  }
}
