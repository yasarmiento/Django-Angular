import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolUaddComponent } from './rol-uadd.component';

describe('RolUaddComponent', () => {
  let component: RolUaddComponent;
  let fixture: ComponentFixture<RolUaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolUaddComponent]
    });
    fixture = TestBed.createComponent(RolUaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
