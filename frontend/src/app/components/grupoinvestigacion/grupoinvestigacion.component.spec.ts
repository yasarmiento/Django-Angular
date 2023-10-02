import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoinvestigacionComponent } from './grupoinvestigacion.component';

describe('GrupoinvestigacionComponent', () => {
  let component: GrupoinvestigacionComponent;
  let fixture: ComponentFixture<GrupoinvestigacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrupoinvestigacionComponent]
    });
    fixture = TestBed.createComponent(GrupoinvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
