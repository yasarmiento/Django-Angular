import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoarchivoComponent } from './tipoarchivo.component';

describe('TipoarchivoComponent', () => {
  let component: TipoarchivoComponent;
  let fixture: ComponentFixture<TipoarchivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoarchivoComponent]
    });
    fixture = TestBed.createComponent(TipoarchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
