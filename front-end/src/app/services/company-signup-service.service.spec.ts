import { TestBed } from '@angular/core/testing';

import { CompanySignupServiceService } from './company-signup-service.service';

describe('CompanySignupServiceService', () => {
  let service: CompanySignupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanySignupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
