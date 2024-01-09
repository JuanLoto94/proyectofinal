import { Component,ElementRef,OnInit } from '@angular/core';
import { Router, ActivatedRoute,RouterLink} from "@angular/router";
import { EstudiantesService } from 'src/app/services/estudiantes.service';


@Component({
  selector: 'app-estudiantes-listar',
  templateUrl: './estudiantes-listar.component.html',
  styleUrls: ['./estudiantes-listar.component.css']
})
export   class  EstudiantesListarComponent implements OnInit{



  buscarEstudiante:string='';
  estudiantes:any[]=[];
  getestudiante: any;

  
  ngOnInit(): void {
    this.cargarTabla();
  }

  constructor( 
    private router:Router,
    private estudiantesservice: EstudiantesService ){}

cargarTabla(){
  this.estudiantesservice.getEstudiantes().subscribe(
    data => {
      this.estudiantes = data;
    },
    (error)=> {
      console.error('Error al cargar los datos DEL estudiante',error);
    }
  )
}

eliminarEstudiante(estudiante:any):void{
  if(confirm("¿Está seguro que desea eliminar el/la estudiante "+estudiante.Nombre+"?")){
    this.estudiantesservice.deleteEstudiante(estudiante.IdEstudiantes).subscribe(
      (data) => {
        this.cargarTabla();
      },
      (error) => {
        console.error('Error al eliminar al/la estudiante', error);
      }
    )
  }
}

searchEstudiante():void{
  if(this.buscarEstudiante){
    this.estudiantesservice.getEstudianteByNombre(this.buscarEstudiante).subscribe(
      (data) => {
        this.estudiantes = data;
      },
      (error) => {
        console.error('Error al obtener el nombre del estudiante', error);
      }
    );
  }else{
    this.cargarTabla();
  }
}
}
