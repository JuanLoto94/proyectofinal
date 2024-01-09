import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EstudiantesListarComponent } from './pages/estudiantes-listar/estudiantes-listar.component';
import { EstudiantesEditarComponent } from './pages/estudiantes-editar/estudiantes-editar.component';
import { EstudiantesCargarComponent } from './pages/estudiantes-cargar/estudiantes-cargar.component';


const routes: Routes = [

  {path:'listarestudiantes',component:EstudiantesListarComponent},
  {path:'insertarestudiantes',component:EstudiantesCargarComponent},
  {path:'editarestudiantes/:id',component:EstudiantesEditarComponent},
  {path:'contacto',component:ContactoComponent},  
  {path:'cargarestudiantes',component:EstudiantesCargarComponent},
  {path:'',component:PrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }