import { TestBed } from '@angular/core/testing';

import { RoluService } from './rolu.service';

describe('RoluService', () => {
  let service: RoluService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoluService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
