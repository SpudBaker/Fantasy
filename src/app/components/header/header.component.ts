import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from './../../services/state/state.service';
import * as Globals from './../../globals' ;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor (private state: StateService, private router: Router) { }

  ngOnInit() {
  }

  getStatuses(): string[] {
    return Object.keys(Globals.PlayerStatus);
  }

  selectedStatus(e) {
    this.state.status = e;
    console.log(e);
    switch (e) {
      case 'LoggedOut':
        this.router.navigate(['logged-out']);
        break;
      case 'BiddingForInitialSquad':
        this.router.navigate(['bfis']);
        break;
   }
  }

}
