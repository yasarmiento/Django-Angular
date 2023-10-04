import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorformComponent } from './operadorform.component';

describe('OperadorformComponent', () => {
  let component: OperadorformComponent;
  let fixture: ComponentFixture<OperadorformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperadorformComponent]
    });
    fixture = TestBed.createComponent(OperadorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
