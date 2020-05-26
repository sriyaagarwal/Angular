import { TestBed } from '@angular/core/testing';

import { DeleteAccountService } from './delete-account.service';

describe('DeleteAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteAccountService = TestBed.get(DeleteAccountService);
    expect(service).toBeTruthy();
  });
});
