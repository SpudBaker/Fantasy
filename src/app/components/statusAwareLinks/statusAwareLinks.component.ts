import { Component, OnInit, ViewChild } from '@angular/core';
import { StateService } from './../../services/state/state.service';

@Component({
  selector: 'app-status-aware-links',
  templateUrl: './statusAwareLinks.component.html',
  styleUrls: ['./statusAwareLinks.component.scss']
})
export class StatusAwareLinksComponent implements OnInit {

  constructor(private state: StateService) { }

  ngOnInit() {
  }

}
