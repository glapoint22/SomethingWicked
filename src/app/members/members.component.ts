import { Component, OnInit } from '@angular/core';
import { Member } from "../classes/member";
import { DataService } from "../data.service";


@Component({
  selector: 'members',
  templateUrl: './members.component.html'
})
export class MembersComponent implements OnInit {
  private members: Member[];

  constructor(private dataService: DataService) { }

  //-----------------------------------------------------------------------------------------------------------ngOnInit---------------------------------------------------------------------------------
  ngOnInit() {
    //Get the members
    this.dataService.getData().subscribe(response => {
      this.members = response.members;
    });
  }

  //----------------------------------------------------------------------------------------------------------showBio---------------------------------------------------------------------------------
  showBio(member: string): void{
    console.log(member);
  }
}