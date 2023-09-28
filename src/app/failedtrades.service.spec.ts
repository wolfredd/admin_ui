import { TestBed } from '@angular/core/testing';

import { FailedtradesService } from './failedtrades.service';

describe('FailedtradesService', () => {
  let service: FailedtradesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FailedtradesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
