import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EstudiantesListarComponent } from './pages/estudiantes-listar/estudiantes-listar.component';
import { EstudiantesEditarComponent } from './pages/estudiantes-editar/estudiantes-editar.component';
import { EstudiantesCargarComponent } from './pages/estudiantes-cargar/estudiantes-cargar.component';
import { EstudiantesService } from './services/estudiantes.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    ContactoComponent,
    EstudiantesListarComponent,
    EstudiantesEditarComponent,
    EstudiantesCargarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EstudiantesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }