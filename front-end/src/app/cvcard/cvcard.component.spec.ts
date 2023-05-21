import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVcardComponent } from './cvcard.component';

describe('CVcardComponent', () => {
  let component: CVcardComponent;
  let fixture: ComponentFixture<CVcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CVcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CVcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
