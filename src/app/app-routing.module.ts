import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiddingForInitialSquadComponent } from '../app/components/main/bfis/bidding_for_initial_squad.component';
import { LoggedOutComponent } from '../app/components/main/logged_out/logged_out.component';

const routes: Routes = [
  { path: 'bfis', component: BiddingForInitialSquadComponent },
  { path: 'logged-out', component: LoggedOutComponent },
  { path: '',
    redirectTo: '/logged-out',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
