import { TestBed } from '@angular/core/testing';

import { PendingtradesService } from './pendingtrades.service';

describe('PendingtradesService', () => {
  let service: PendingtradesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingtradesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
