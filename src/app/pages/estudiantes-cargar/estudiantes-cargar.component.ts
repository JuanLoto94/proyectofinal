import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estudiantes-cargar',
  templateUrl: './estudiantes-cargar.component.html',
  styleUrls: ['./estudiantes-cargar.component.css']
})

export class EstudiantesCargarComponent implements OnInit {
submitForm() {
throw new Error('Method not implemented.');
}

  estudiantes={
   Nombre:'',
   Apellido:'',
   DNI:'',
   Telefono:'',
   Email:'',
  }

  constructor(
    private router : Router,
    private estudiantesservice:EstudiantesService
  ){

  }

  crearEstudiantes(){
    this.estudiantesservice.insertEstudiante(this.estudiantes)
    .subscribe
    (
      (data) => {
        console.log("Se ha añadido el/la estudiante correctamente");
        this.router.navigateByUrl('/listarestudiantes');
      },
      (error)=>{
        alert('Error al insertar el/la estudiante');
      }
    );
  }

  ngOnInit(): void {
    
  }

}