import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidacyDetailsComponent } from './candidacy-details.component';

describe('CandidacyDetailsComponent', () => {
  let component: CandidacyDetailsComponent;
  let fixture: ComponentFixture<CandidacyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidacyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidacyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
