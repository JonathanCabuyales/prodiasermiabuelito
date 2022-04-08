import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createCourse(user: any){
    return this.http.post(`${this.baseUrl}APIABUELITO/preguntas/pregunta_insert.php`, user);
  }

  getCourses(curso: any){
    return this.http.post(`${this.baseUrl}APIABUELITO/preguntas/pregunta_get.php`, curso);
  }
  
}
