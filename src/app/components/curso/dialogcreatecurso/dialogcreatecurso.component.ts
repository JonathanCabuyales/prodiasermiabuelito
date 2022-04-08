import { Component, OnInit } from '@angular/core';
import { CursoI } from 'src/app/models/curso.interface';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { UploadfilesService } from 'src/app/services/uploadfiles/uploadfiles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialogcreatecurso',
  templateUrl: './dialogcreatecurso.component.html',
  styleUrls: ['./dialogcreatecurso.component.css']
})
export class DialogcreatecursoComponent implements OnInit {

  listaVideosCurso: any[];
  listaVideos: any[];

  archivo = {
    archivo: '',
    tipo: '',
    nombre: '',
    titulo: ''
  }

  // variable para guardar los cursos
  curso: CursoI;

  // variable en la que se guardara los videos dentro del servidor 
  // se debe cambiar la direccion por la del hosting en la web 
  urlfile: string = 'http://localhost/APIABUELITO/archivos/videos/';

  constructor(private _uploadfiles: UploadfilesService,
    private _cursos: CursosService) { }

  ngOnInit(): void {

    this.listaVideos = [];

    this.listaVideosCurso = [
      {
        titulo: '',
        videos: ''
      }
    ];

    this.listaVideosCurso = [{ titulo: '', video: '', nombre: '' }];

    this.curso = {
      id_cur: '',
      id_usu: '',
      nombre_cur: '',
      descripcion_cur: '',
      videos_cur: ''
    }

  }

  addVideo() {
    this.listaVideosCurso.push(
      { titulo: '', video: '', nombre: '' });

    console.log(this.listaVideosCurso);

  }

  uploadVideo(video: any, numero: any) {

    // guardo el archivo
    const archivoCapturado = video.target.files[0];

    // guardo el tipo de archivo
    const tipo = video.target.files[0].type;

    // guardo el nombre del archivo
    const name = video.target.files[0].name;

    this._uploadfiles.uploadFile(archivoCapturado).subscribe((res: any) => {
      if (res.status == 'success') {

        this.listaVideosCurso[numero].video = this.urlfile + res.msj;
        this.listaVideosCurso[numero].nombre = name;

        console.log(this.listaVideosCurso);

      } else if (res.status == 'error') {

        console.log('no puede subir el video');
        

      }
    });

  }

  saveCourse() {
    if (this.curso.nombre_cur == '' || this.curso.nombre_cur == null) {
      Swal.fire({
        icon:'warning',
        confirmButtonColor:'#ffae00',
        text:'Debes colocar el nombre del curso'
      }); 
    }else if(this.curso.descripcion_cur == '' || this.curso.descripcion_cur == null){
      Swal.fire({
        icon:'warning',
        confirmButtonColor:'#ffae00',
        text:'Debes ingresar una descripción de tu curso'
      }); 
    }else if(this.listaVideosCurso[0].video == ''){
      Swal.fire({
        icon:'warning',
        confirmButtonColor:'#ffae00',
        text:'Debes ingresar por lo menos un video'
      }); 
    }else{

      this.curso.videos_cur = JSON.stringify(this.listaVideosCurso);

      console.log(this.curso);

      this._cursos.createCourse(this.curso).subscribe(res=>{
        console.log(res);
        
      });
      
    }
  }

}
