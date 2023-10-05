import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoarchivoformComponent } from './tipoarchivoform.component';

describe('TipoarchivoformComponent', () => {
  let component: TipoarchivoformComponent;
  let fixture: ComponentFixture<TipoarchivoformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoarchivoformComponent]
    });
    fixture = TestBed.createComponent(TipoarchivoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
