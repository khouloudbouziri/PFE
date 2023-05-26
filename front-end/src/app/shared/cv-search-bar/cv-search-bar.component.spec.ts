import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSearchBarComponent } from './cv-search-bar.component';

describe('CvSearchBarComponent', () => {
  let component: CvSearchBarComponent;
  let fixture: ComponentFixture<CvSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
