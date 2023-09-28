import { TestBed } from '@angular/core/testing';

import { CancelledtradesService } from './cancelledtrades.service';

describe('CancelledtradesService', () => {
  let service: CancelledtradesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancelledtradesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
