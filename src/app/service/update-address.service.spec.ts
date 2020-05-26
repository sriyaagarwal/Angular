import { TestBed } from '@angular/core/testing';

import { UpdateAddressService } from './update-address.service';

describe('UpdateAddressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateAddressService = TestBed.get(UpdateAddressService);
    expect(service).toBeTruthy();
  });
});
