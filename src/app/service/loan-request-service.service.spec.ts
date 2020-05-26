import { TestBed } from '@angular/core/testing';

import { LoanRequestServiceService } from './loan-request-service.service';

describe('LoanRequestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanRequestServiceService = TestBed.get(LoanRequestServiceService);
    expect(service).toBeTruthy();
  });
});
