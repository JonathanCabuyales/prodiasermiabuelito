import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createUser(user: any){
    return this.http.post(`${this.baseUrl}APIABUELITO/login/login_insert.php`, user);
  }


  uploadFile(imagenParaSubir: File){
		const formData = new FormData(); 
		formData.append('imagenPropia', imagenParaSubir, imagenParaSubir.name); 
		return this.http.post(`${this.baseUrl}APIABUELITO/login/login_uploadfile.php`, formData);
  }
}
