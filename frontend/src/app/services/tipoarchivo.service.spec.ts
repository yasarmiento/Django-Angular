import { TestBed } from '@angular/core/testing';

import { TipoarchivoService } from './tipoarchivo.service';

describe('TipoarchivoService', () => {
  let service: TipoarchivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoarchivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
