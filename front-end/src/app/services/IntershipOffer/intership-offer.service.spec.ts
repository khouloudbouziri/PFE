import { TestBed } from '@angular/core/testing';

import { IntershipOfferService } from './intership-offer.service';

describe('IntershipOfferService', () => {
  let service: IntershipOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntershipOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
