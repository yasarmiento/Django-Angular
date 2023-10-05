import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosaddComponent } from './usuariosadd.component';

describe('UsuariosaddComponent', () => {
  let component: UsuariosaddComponent;
  let fixture: ComponentFixture<UsuariosaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosaddComponent]
    });
    fixture = TestBed.createComponent(UsuariosaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
