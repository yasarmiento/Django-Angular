import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoComponent } from './archivo.component';

describe('ArchivoComponent', () => {
  let component: ArchivoComponent;
  let fixture: ComponentFixture<ArchivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivoComponent]
    });
    fixture = TestBed.createComponent(ArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
