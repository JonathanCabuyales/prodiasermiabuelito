import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadfilesService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createUser(user: any){
    return this.http.post(`${this.baseUrl}APIABUELITO/login/login_insert.php`, user);
  }


  uploadFile(filesubir: File){
		const formData = new FormData();
		formData.append('imagenPropia', filesubir, filesubir.name); 
		return this.http.post(`${this.baseUrl}APIABUELITO/archivos/uploadVideo.php`, formData);
  }

}
