import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDescriptionComponent } from './cv-description.component';

describe('CvDescriptionComponent', () => {
  let component: CvDescriptionComponent;
  let fixture: ComponentFixture<CvDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
