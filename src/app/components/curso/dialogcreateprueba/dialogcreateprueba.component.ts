import { Component, OnInit } from '@angular/core';
import { PreguntasI } from 'src/app/models/preguntas.interface';
import { PreguntasService } from 'src/app/services/preguntas/preguntas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialogcreateprueba',
  templateUrl: './dialogcreateprueba.component.html',
  styleUrls: ['./dialogcreateprueba.component.css']
})
export class DialogcreatepruebaComponent implements OnInit {

  listapreguntas: any[];
  listaverdaderofalso: any[];

  pregunta: PreguntasI;

  constructor(private _pregutas: PreguntasService) { }

  ngOnInit(): void {
    this.listapreguntas = [];
    this.listaverdaderofalso = [];

    this.pregunta = {
      id_preg: '',
      id_usu: '',
      id_cur: '',
      preguntasop_preg: '',
      preguntaverda_preg: ''
    }
  }

  addpregunta() {
    this.listapreguntas.push({
      pregunta: '',
      respuestaCorrecta: '',
      opcion1: '',
      opcion2: '',
      opcion3: '',
      opcion4: ''
    });
  }

  addverdaderofalso() {
    this.listaverdaderofalso.push({
      pregunta: '',
      verdadero: true,
      falso: false
    });
  }

  guardarPrueba() {
    console.log(this.listapreguntas);
    console.log(this.listaverdaderofalso);

    if (!this.listapreguntas.length && !this.listaverdaderofalso.length) {
      this.mensajesError("No has ingresa ninguna pregunta");
      
    }  else {
      this.pregunta.preguntasop_preg = JSON.stringify(this.listapreguntas);
      this.pregunta.preguntaverda_preg = JSON.stringify(this.listaverdaderofalso);

      console.log(this.pregunta);

      let listapreg = false;

      for (let i = 0; i < this.listapreguntas.length; i++) {

        console.log(this.listapreguntas[i]);

        if(this.listapreguntas[i].pregunta == '' || this.listapreguntas[i].pregunta == null){
          this.mensajesError("No has especificado la pregunta No.-" + (i +1));

        }else if(this.listapreguntas[i].opcion1 == '' || this.listapreguntas[i].opcion1 == null){
          this.mensajesError("No has especificado la opcion 1 de la pergunta No.-" + (i +1));

        }else if(this.listapreguntas[i].opcion2 == '' || this.listapreguntas[i].opcion2 == null){
          this.mensajesError("No has especificado la opcion 2 de la pergunta No.-" + (i +1));
        
        }else if(this.listapreguntas[i].opcion3 == '' || this.listapreguntas[i].opcion3 == null){
          this.mensajesError("No has especificado la opcion 3 de la pergunta No.-" + (i +1));

        }else if(this.listapreguntas[i].opcion4 == '' || this.listapreguntas[i].opcion4 == null){
          this.mensajesError("No has especificado la opcion 4 de la pergunta No.-" + (i +1));
        }else if(this.listapreguntas[i].respuestaCorrecta == '' || this.listapreguntas[i].respuestaCorrecta == null){
          this.mensajesError("No has seleccionado la respuesta de la pretunga No.-" + (i +1));
        }else{
          listapreg= true;
        }
        
      }

      for (let i = 0; i < this.listaverdaderofalso.length; i++) {
        if(this.listaverdaderofalso[i].pregunta == '' || this.listaverdaderofalso[i].pregunta == null){
          this.mensajesError("No has especificado la pregunta No.-" + (i +1));
        }
      }
      
      // this._pregutas.getCourses(this.pregunta).subscribe(res => {
      //   console.log(res);

      // });
    }

  }

  deletePregunta(i: any) {
    this.listapreguntas.splice(i, 1);
  }

  deleteVerdadero(i){
    this.listaverdaderofalso.splice(i, 1);
  }


  mensajesError(mensaje: any){
    Swal.fire({
      icon: 'warning',
      confirmButtonColor: '#ffae00',
      text: mensaje 
    });
  }
}
