import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  private apiUrl = 'http://localhost/APIPrueba/Estudiantes.php'

  constructor(private http: HttpClient) { }

  // Método para obtener todos los Estudiantes
  getEstudiantes(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  //Método para obtener un estudiante por ID
  getEstudianteById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?id=${id}`);
  }

  //Método para obtener estudiante por Nombre
  getEstudianteByNombre(Nombre: any): Observable<any> {
    return this.http.get(`${this.apiUrl}?Nombre=${Nombre}`);
  }

  //Método para obtener estudiante por Apellido
  getEstudianteByApellido(Apellido: any): Observable<any> {
  return this.http.get(`${this.apiUrl}?Apellido=${Apellido}`);
  }

  //Método para obtener estudiante por DNI
  getEstudianteByDNI(DNI: any): Observable<any> {
    return this.http.get(`${this.apiUrl}?DNI=${DNI}`);
  }

  //Método para obtener estudiante por Telefono
  getEstudianteByTelefono(Telefono: any): Observable<any> {
    return this.http.get(`${this.apiUrl}?Telefono=${Telefono}`);
  }

  //Método para obtener estudiante por Email
  getEstudianteByEmail(Email: any): Observable<any> {
    return this.http.get(`${this.apiUrl}?Email=${Email}`);
  }

  //Método para eliminar un estudiante por ID
  deleteEstudiante(id:any): Observable<any>{
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }

  //Método para actualizar un estudiante
  updateEstudiante(id:any,nuevoNombre:any,nuevoApellido:any,nuevoDNI:any,nuevoTelefono:any,nuevoEmail:any): Observable<any> {
    return this.http.put(`${this.apiUrl}`,{IdEstudiantes:id,Nombre:nuevoNombre,Apellido:nuevoApellido,DNI:nuevoDNI,Telefono:nuevoTelefono,Email:nuevoEmail});
  }

  //Método para insertar un estudiante
  insertEstudiante(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`,data);
  }
}