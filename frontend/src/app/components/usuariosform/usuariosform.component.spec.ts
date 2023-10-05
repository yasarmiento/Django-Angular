import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosformComponent } from './usuariosform.component';

describe('UsuariosformComponent', () => {
  let component: UsuariosformComponent;
  let fixture: ComponentFixture<UsuariosformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosformComponent]
    });
    fixture = TestBed.createComponent(UsuariosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
