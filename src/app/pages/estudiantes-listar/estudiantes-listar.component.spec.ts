import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesListarComponent } from './estudiantes-listar.component';

describe('EstudiantesListarComponent', () => {
  let component: EstudiantesListarComponent;
  let fixture: ComponentFixture<EstudiantesListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudiantesListarComponent]
    });
    fixture = TestBed.createComponent(EstudiantesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
