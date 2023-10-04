import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadoraddComponent } from './operadoradd.component';

describe('OperadoraddComponent', () => {
  let component: OperadoraddComponent;
  let fixture: ComponentFixture<OperadoraddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperadoraddComponent]
    });
    fixture = TestBed.createComponent(OperadoraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
