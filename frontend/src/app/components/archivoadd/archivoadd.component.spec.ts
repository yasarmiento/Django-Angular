import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoaddComponent } from './archivoadd.component';

describe('ArchivoaddComponent', () => {
  let component: ArchivoaddComponent;
  let fixture: ComponentFixture<ArchivoaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivoaddComponent]
    });
    fixture = TestBed.createComponent(ArchivoaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
