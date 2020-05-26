import { TestBed } from '@angular/core/testing';

import { DebitChequeService } from './debit-cheque.service';

describe('CreditSlipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DebitChequeService = TestBed.get(DebitChequeService);
    expect(service).toBeTruthy();
  });
});
