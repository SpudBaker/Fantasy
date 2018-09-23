import { Injectable } from '@angular/core';
import * as Globals from './../../globals' ;

@Injectable({
  providedIn: 'root'
})
export class StateService {

  testMode = true;
  status: Globals.PlayerStatus = Globals.PlayerStatus.BiddingForInitialSquad;

  constructor() { }
}
