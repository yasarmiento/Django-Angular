import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoformComponent } from './ArchivoformComponent';

describe('ArchivoformComponent', () => {
  let component: ArchivoformComponent;
  let fixture: ComponentFixture<ArchivoformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivoformComponent]
    });
    fixture = TestBed.createComponent(ArchivoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
