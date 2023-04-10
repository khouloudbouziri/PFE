import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorCardComponent } from './supervisor-card.component';

describe('SupervisorCardComponent', () => {
  let component: SupervisorCardComponent;
  let fixture: ComponentFixture<SupervisorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
