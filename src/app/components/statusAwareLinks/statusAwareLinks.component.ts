import { Component, OnInit } from '@angular/core';
import { StateService } from './../../services/state/state.service';
import * as Globals from './../../globals' ;

@Component({
  selector: 'app-status-aware-links',
  templateUrl: './statusAwareLinks.component.html',
  styleUrls: ['./statusAwareLinks.component.scss']
})
export class StatusAwareLinksComponent implements OnInit {

  constructor(private state: StateService) { }

  ngOnInit() {
  }

  getStatus(): string {
    return Globals.PlayerStatus[this.state.status];
  }

  getGlobals(): any {
    return Globals;
  }

}
