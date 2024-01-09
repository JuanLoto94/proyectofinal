import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesCargarComponent } from './estudiantes-cargar.component';

describe('EstudiantesCargarComponent', () => {
  let component: EstudiantesCargarComponent;
  let fixture: ComponentFixture<EstudiantesCargarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudiantesCargarComponent]
    });
    fixture = TestBed.createComponent(EstudiantesCargarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
