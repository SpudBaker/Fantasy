import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAwareLinksComponent } from './statusAwareLinks.component';

describe('StatusAwareLinksComponent', () => {
  let component: StatusAwareLinksComponent;
  let fixture: ComponentFixture<StatusAwareLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusAwareLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAwareLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
