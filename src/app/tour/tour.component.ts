import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Show } from "../classes/show";

@Component({
  selector: 'tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
  public shows: Show[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //Get the shows
    this.dataService.data
      .subscribe((response) =>{
        this.shows = <Show[]>response.shows;
      });
  }
}
