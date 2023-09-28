import { TestBed } from '@angular/core/testing';

import { FilledtradesService } from './filledtrades.service';

describe('FilledtradesService', () => {
  let service: FilledtradesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilledtradesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
