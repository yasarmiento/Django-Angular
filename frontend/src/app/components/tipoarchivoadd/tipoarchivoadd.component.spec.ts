import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoarchivoaddComponent } from './tipoarchivoadd.component';

describe('TipoarchivoaddComponent', () => {
  let component: TipoarchivoaddComponent;
  let fixture: ComponentFixture<TipoarchivoaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoarchivoaddComponent]
    });
    fixture = TestBed.createComponent(TipoarchivoaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
