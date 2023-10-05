import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadfaddComponent } from './entidadfadd.component';

describe('EntidadfaddComponent', () => {
  let component: EntidadfaddComponent;
  let fixture: ComponentFixture<EntidadfaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntidadfaddComponent]
    });
    fixture = TestBed.createComponent(EntidadfaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
