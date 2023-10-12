import { TestBed } from '@angular/core/testing';

import { SeguimientosService } from './seguimientos.service';

describe('SeguimientosService', () => {
  let service: SeguimientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeguimientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
