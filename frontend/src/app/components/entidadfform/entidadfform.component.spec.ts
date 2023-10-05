import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadfformComponent } from './entidadfform.component';

describe('EntidadfformComponent', () => {
  let component: EntidadfformComponent;
  let fixture: ComponentFixture<EntidadfformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntidadfformComponent]
    });
    fixture = TestBed.createComponent(EntidadfformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
