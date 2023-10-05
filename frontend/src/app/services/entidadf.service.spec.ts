import { TestBed } from '@angular/core/testing';

import { EntidadfService } from './entidadf.service';

describe('EntidadfService', () => {
  let service: EntidadfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntidadfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
