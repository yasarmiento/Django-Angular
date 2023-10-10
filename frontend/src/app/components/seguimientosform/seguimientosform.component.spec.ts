import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientosformComponent } from './seguimientosform.component';

describe('SeguimientosformComponent', () => {
  let component: SeguimientosformComponent;
  let fixture: ComponentFixture<SeguimientosformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientosformComponent]
    });
    fixture = TestBed.createComponent(SeguimientosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
