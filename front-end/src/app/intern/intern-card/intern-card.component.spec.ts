import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternCardComponent } from './intern-card.component';

describe('InternCardComponent', () => {
  let component: InternCardComponent;
  let fixture: ComponentFixture<InternCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
