import { TestBed } from '@angular/core/testing';

import { CreditChequeService } from './credit-cheque.service';

describe('CreditChequeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditChequeService = TestBed.get(CreditChequeService);
    expect(service).toBeTruthy();
  });
});
