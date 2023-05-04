import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorOfferCardComponent } from './supervisor-offer-card.component';

describe('SupervisorOfferCardComponent', () => {
  let component: SupervisorOfferCardComponent;
  let fixture: ComponentFixture<SupervisorOfferCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorOfferCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorOfferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
