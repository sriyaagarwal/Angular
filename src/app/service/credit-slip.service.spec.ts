import { TestBed } from '@angular/core/testing';

import { CreditSlipService } from './credit-slip.service';

describe('CreditSlipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditSlipService = TestBed.get(CreditSlipService);
    expect(service).toBeTruthy();
  });
});
