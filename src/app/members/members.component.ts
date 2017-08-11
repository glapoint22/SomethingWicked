import { Component, OnInit } from '@angular/core';
import { Member } from "../classes/member";
import { DataService } from "../data.service";
import { Router } from '@angular/router';


@Component({
  selector: 'members',
  templateUrl: './members.component.html'
})
export class MembersComponent implements OnInit {
  public members: Member[];

  constructor(private dataService: DataService, private router: Router) { }

  //-----------------------------------------------------------------------------------------------------------ngOnInit---------------------------------------------------------------------------------
  ngOnInit() {
    //Get the members
    this.dataService.getData().subscribe(response => {
      this.members = response.members;
    });
  }

  //----------------------------------------------------------------------------------------------------------showBio---------------------------------------------------------------------------------
  showBio(member: string): void{
    this.router.navigate(['/bios', member])
  }
}