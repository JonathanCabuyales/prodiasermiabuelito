import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  hide = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  login(){
    this.router.navigate(['/curso']);
    
  }

  register(){
    this.router.navigate(['/home/registro']);
  }

}
