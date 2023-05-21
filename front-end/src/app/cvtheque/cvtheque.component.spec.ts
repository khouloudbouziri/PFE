import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVthequeComponent } from './cvtheque.component';

describe('CVthequeComponent', () => {
  let component: CVthequeComponent;
  let fixture: ComponentFixture<CVthequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CVthequeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CVthequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
