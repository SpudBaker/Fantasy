// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BiddingForInitialSquadComponent } from './components/main/bfis/bidding_for_initial_squad.component';
import { LoggedOutComponent } from './components/main/logged_out/logged_out.component'
import { StatusAwareLinksComponent } from './components/statusAwareLinks/statusAwareLinks.component';

// services
import { StateService } from './services/state/state.service';

@NgModule({
  declarations: [
    AppComponent,
    BiddingForInitialSquadComponent,
    LoggedOutComponent,
    HeaderComponent,
    StatusAwareLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatGridListModule,
    MatIconModule,
    MatRadioModule,
    MatToolbarModule,
    MatMenuModule,
    ReactiveFormsModule
  ],
  providers: [
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
