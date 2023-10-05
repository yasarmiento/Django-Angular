import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolUformComponent } from './rol-uform.component';

describe('RolUformComponent', () => {
  let component: RolUformComponent;
  let fixture: ComponentFixture<RolUformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolUformComponent]
    });
    fixture = TestBed.createComponent(RolUformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
