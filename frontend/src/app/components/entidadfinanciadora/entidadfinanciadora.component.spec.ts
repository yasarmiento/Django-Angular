import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadfinanciadoraComponent } from './entidadfinanciadora.component';

describe('EntidadfinanciadoraComponent', () => {
  let component: EntidadfinanciadoraComponent;
  let fixture: ComponentFixture<EntidadfinanciadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntidadfinanciadoraComponent]
    });
    fixture = TestBed.createComponent(EntidadfinanciadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
