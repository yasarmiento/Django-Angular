import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolUComponent } from './rol-u.component';

describe('RolUComponent', () => {
  let component: RolUComponent;
  let fixture: ComponentFixture<RolUComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolUComponent]
    });
    fixture = TestBed.createComponent(RolUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
