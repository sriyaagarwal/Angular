import { TestBed } from '@angular/core/testing';

import { PassbookService } from './passbook.service';

describe('PassbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassbookService = TestBed.get(PassbookService);
    expect(service).toBeTruthy();
  });
});
