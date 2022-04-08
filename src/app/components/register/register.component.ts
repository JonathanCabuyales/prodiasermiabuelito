import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { LoginService } from 'src/app/services/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // 
  // 
  //       ACTUALIZACION 04 de marzo del 2022
  // ***********************************************
  // 
  // 
  // se implemento registro para cursos, se guarda 
  // informacion personal conjuntamente con la copia
  // o una foto de su cedula
  // 
  // 
  // ***********************************************

  showNavigationArrows = false;
  showNavigationIndicators = false;


  // variable para guardar el usuario
  usuario: UsuarioI;


  // variables para ver el estado del archivo
  public respuestaImagenEnviada;
  public resultadoCarga;

  // url del hosting con los archivos
  // esta url se debe cambiar cuando se suba al host por la direccion del host
  // urlFile: string = 'http://localhost/podriasermiabuelito/APIABUELITO/';
  urlFile: string = 'https://podriasermiabuelito.org/';

  file = {
    pdf: '',
    imgfrente: '',
    imgreverso: ''
  };

  constructor(private _login: LoginService,
    private router: Router) { }

  ngOnInit(): void {

    this.usuario = {
      nombres_usu: '',
      apellidos_usu: '',
      direccion_usu: '',
      numero_usu: '',
      cedula_usu: '',
      correo_usu: '',
      password_usu: '',
      cedulapdf_usu: '',
      rol_usu: 'USUARIO',
      cursos_usu: ''
    }

  }


  register(){

    if(this.usuario.nombres_usu == '' || this.usuario.nombres_usu == null){
      Swal.fire({
        icon:'warning',
        confirmButtonColor:'#ffae00',
        text:'Debes ingresar tu nombre'
      }); 
    }else if(this.usuario.apellidos_usu == '' || this.usuario.apellidos_usu == null){
      Swal.fire({
        icon:'warning',
        confirmButtonColor:'#ffae00',
        text:'No has ingresado tu apellido'
      }); 
    }else if(this.usuario.direccion_usu == '' || this.usuario.direccion_usu == null){
      Swal.fire({
        icon:'warning',
        confirmButtonColor:'#ffae00',
        text:'Debes ingresar la dirección'
      }); 
    }else if(this.usuario.numero_usu == '' || this.usuario.numero_usu == null){
      Swal.fire({
        icon:'warning',
        confirmButtonColor:'#ffae00',
        text:'No has ingresado tu número de contacto'
      }); 
    }else if(this.usuario.cedula_usu == '' || this.usuario.cedula_usu == null){
      Swal.fire({
        icon:'warning',
        confirmButtonColor:'#ffae00',
        text:'Debes ingresar tu numero de cedúla'
      }); 
    }else if(this.usuario.correo_usu == '' || this.usuario.correo_usu == null){
      Swal.fire({
        icon:'warning',
        confirmButtonColor:'#ffae00',
        text:'No has ingresado tu correo'
      }); 
    }else if(this.usuario.cedulapdf_usu == '' || this.usuario.cedulapdf_usu == null){
      Swal.fire({
        icon:'warning',
        confirmButtonColor:'#ffae00',
        text:'Debes ingresar la cedula en formato PDF o FOTOGRAFIAS de ambos ladosa'
      }); 
    }else if(this.usuario.password_usu == '' || this.usuario.password_usu == null){
      Swal.fire({
        icon:'warning',
        confirmButtonColor:'#ffae00',
        text:'No has especificado una contraseña'
      }); 
    }else {

      
      if(this.file.imgfrente != '' && this.file.imgreverso == ''){
        Swal.fire({
          icon:'warning',
          confirmButtonColor:'#ffae00',
          text:'Debes subir la imgen del reverso de tu cédula'
        }); 
      }else if(this.file.imgfrente == '' && this.file.imgreverso != ''){
        Swal.fire({
          icon:'warning',
          confirmButtonColor:'#ffae00',
          text:'Debes subir la imgen del frente de tu cédula'
        });
      }else{

        this._login.createUser(this.usuario).subscribe(res=>{
          if(res){
            Swal.fire({
              icon:'success',
              confirmButtonColor:'#ffae00',
              text:'Gracias por registrarte, inicia sesión con tu correo y contraseña'
            }); 
  
            this.router.navigate(['/home/login']);
  
          }
        }, erro =>{
          console.log(erro);
          
        });

      }
      
    }

  }

  // funcion para subir fotos
  uploadFile(files: any, archivo: any){

		this._login.uploadFile(files.target.files[0]).subscribe( (response: any) => {
				      
        if(response.status == 'success'){

          if(archivo == 'pdf'){
            this.file.pdf = this.urlFile + response.msj;
          }else if(archivo == 'img1'){
            this.file.imgfrente = this.urlFile + response.msj
          }else if(archivo == 'img2'){
            this.file.imgreverso = this.urlFile + response.msj
          }

          this.usuario.cedulapdf_usu = JSON.stringify(this.file);

        }else if(response.status == 'error'){
          Swal.fire({
            icon:'warning',
            confirmButtonColor:'#ffae00',
            text: response.msj
          }); 
        }
			},
			error => {
				console.log(<any>error);
			}

		);//FIN DE METODO SUBSCRIBE

	}

}
