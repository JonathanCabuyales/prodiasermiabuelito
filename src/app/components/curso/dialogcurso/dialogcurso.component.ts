import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { DialogcreatecursoComponent } from '../dialogcreatecurso/dialogcreatecurso.component';
import { DialogcreatepruebaComponent } from '../dialogcreateprueba/dialogcreateprueba.component';

@Component({
  selector: 'app-dialogcurso',
  templateUrl: './dialogcurso.component.html',
  styleUrls: ['./dialogcurso.component.css']
})
export class DialogcursoComponent implements OnInit {

  // cargo la interfaz de la tabla 
  displayedColumns: string[] = ['razonsocial', 'ciruc', 'direccion', 'telefono', 'detalles', 'editar'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  token: string = '';

  listacursos: any[];

  constructor(public dialog: MatDialog,
    private _cursos: CursosService) { }

  ngOnInit(): void {

    this.loadCourses();

  }

  createCourse() {
    const dialogRef = this.dialog.open(DialogcreatecursoComponent, {
      width: '80%',
      height: '100%',
    });

    dialogRef.afterClosed().subscribe(res => {

    });
  }

  loadCourses() {

    this.listacursos = [];

    this._cursos.getCourses(this.token).subscribe((res: any) => {

      if (res.length) {

        this.listacursos = res;

        for (let i = 0; i < this.listacursos.length; i++) {
          this.listacursos[i].videos_cur = JSON.parse(res[i].videos_cur);
        }
      }


      this.dataSource = new MatTableDataSource(this.listacursos);
      this.dataSource.paginator = this.paginator;

    });
  }

  crearPrueba() {
    const dialogRef = this.dialog.open(DialogcreatepruebaComponent, {
      width: '80%',
      height: '100%',
    });

    dialogRef.afterClosed().subscribe(res => {

    });

  }

  // funcion para filtro de busqueda
  applyFilter(filtro: any) {

    let palabra = filtro.target.value;

    palabra = palabra.trim(); // Remove whitespace
    palabra = palabra.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filtro.target.value;
  }

}
