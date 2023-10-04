import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosaddComponent } from './proyectosadd.component';

describe('ProyectosaddComponent', () => {
  let component: ProyectosaddComponent;
  let fixture: ComponentFixture<ProyectosaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosaddComponent]
    });
    fixture = TestBed.createComponent(ProyectosaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
