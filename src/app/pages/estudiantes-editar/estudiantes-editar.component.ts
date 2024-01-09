import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estudiantes-editar',
  templateUrl: './estudiantes-editar.component.html',
  styleUrls: ['./estudiantes-editar.component.css']
})
export class EstudiantesEditarComponent implements OnInit {

elID:any;
formEstudiantes: FormGroup;

constructor(
  public formulario:FormBuilder,
  private rutaactiva:ActivatedRoute,
  private estudiantesservice:EstudiantesService,
  private router:Router,
  private http:HttpClient,
){
  this.formEstudiantes=this.formulario.group({
    Nombre:[''],
    Apellido:[''],
    DNI:[''],
    Telefono:[''],
    Email:[''],
  });
}

ngOnInit(): void {
  this.elID=this.rutaactiva.snapshot.paramMap.get('id');
  this.formEstudiantes = this.formulario.group({
    Nombre: [''],
    Apellido:[''],
    DNI:[''],
    Telefono:[''],
    Email:[''],
  });

  this.estudiantesservice.getEstudianteById(this.elID).subscribe((respuesta) => {
    if (respuesta && respuesta[0]) {
      this.formEstudiantes.patchValue({
        Nombre: respuesta[0]['Nombre'],
        Apellido: respuesta[0]['Apellido'],
        DNI: respuesta[0]['DNI'],
        Telefono: respuesta[0]['Telefono'],
        Email: respuesta[0]['Email'],
      });
    }
  });
}

  actualizarEstudiantes():void{
    const IdEstudiantes = this.elID;
    const nuevoNombre=this.formEstudiantes.get('Nombre')?.value;
    const nuevoApellido=this.formEstudiantes.get('Apellido')?.value;
    const nuevoDNI=this.formEstudiantes.get('DNI')?.value;
    const nuevoTelefono=this.formEstudiantes.get('Telefono')?.value;
    const nuevoEmail=this.formEstudiantes.get('Email')?.value;

    this.estudiantesservice.updateEstudiante(IdEstudiantes,nuevoNombre)
    .subscribe(
      respuesta => {
        console.log('Modificación Correcta',respuesta);
        this.router.navigateByUrl('/listarestudiantes');
      },
      error=>{
        console.error('Error',error);
      }
    );
  }

}