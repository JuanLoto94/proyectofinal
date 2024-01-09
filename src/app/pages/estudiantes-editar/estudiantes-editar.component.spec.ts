import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesEditarComponent } from './estudiantes-editar.component';

describe('EstudiantesEditarComponent', () => {
  let component: EstudiantesEditarComponent;
  let fixture: ComponentFixture<EstudiantesEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudiantesEditarComponent]
    });
    fixture = TestBed.createComponent(EstudiantesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
