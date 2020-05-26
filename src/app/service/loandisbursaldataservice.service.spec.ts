import { TestBed } from '@angular/core/testing';

import { LoandisbursaldataserviceService } from './loandisbursaldataservice.service';

describe('LoandisbursaldataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoandisbursaldataserviceService = TestBed.get(LoandisbursaldataserviceService);
    expect(service).toBeTruthy();
  });
});
