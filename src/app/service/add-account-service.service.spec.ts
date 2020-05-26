import { TestBed } from '@angular/core/testing';

import { AddAccountServiceService } from './add-account-service.service';

describe('AddAccountServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddAccountServiceService = TestBed.get(AddAccountServiceService);
    expect(service).toBeTruthy();
  });
});
