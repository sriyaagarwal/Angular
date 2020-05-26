import { TestBed } from '@angular/core/testing';

import { DebitSlipService } from './debit-slip.service';

describe('DebitSlipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DebitSlipService = TestBed.get(DebitSlipService);
    expect(service).toBeTruthy();
  });
});
