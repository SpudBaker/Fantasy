import { Component, OnInit } from '@angular/core';
import { StateService } from './../../services/state/state.service';
import * as Globals from './../../globals' ;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor (private state: StateService) { }

  ngOnInit() {
  }

  getStatuses(): string[] {
    return Object.keys(Globals.PlayerStatus);
  }

  selectedStatus(e) {
   this.state.status = e;
  }

}
