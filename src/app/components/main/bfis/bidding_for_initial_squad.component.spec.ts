import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingForInitialSquadComponent } from './bidding_for_initial_squad.component';

describe('HomeComponent', () => {
  let component: BiddingForInitialSquadComponent;
  let fixture: ComponentFixture<BiddingForInitialSquadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingForInitialSquadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingForInitialSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
