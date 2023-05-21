import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyIntershipOfferComponent } from './modify-intership-offer.component';

describe('ModifyIntershipOfferComponent', () => {
  let component: ModifyIntershipOfferComponent;
  let fixture: ComponentFixture<ModifyIntershipOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyIntershipOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyIntershipOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
