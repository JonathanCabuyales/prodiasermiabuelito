import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createCourse(user: any){
    return this.http.post(`${this.baseUrl}APIABUELITO/cursos/curso_insert.php`, user);
  }

  getCourses(curso: any){
    return this.http.post(`${this.baseUrl}APIABUELITO/cursos/curso_get.php`, curso);
  }

}
