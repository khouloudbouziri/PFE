import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorOfferDetailsComponent } from './supervisor-offer-details.component';

describe('SupervisorOfferDetailsComponent', () => {
  let component: SupervisorOfferDetailsComponent;
  let fixture: ComponentFixture<SupervisorOfferDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorOfferDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorOfferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
