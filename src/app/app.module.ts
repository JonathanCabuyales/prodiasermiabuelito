import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { BeneficiariosComponent } from './components/beneficiarios/beneficiarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './components/popup/popup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PopupverticalComponent } from './components/popupvertical/popupvertical.component';
import { LoginComponent } from './components/login/login.component';
import { CursosComponent } from './components/curso/cursos/cursos.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DialogcursosComponent } from './components/curso/dialogcursos/dialogcursos.component';
import { DialogmiscursosComponent } from './components/curso/dialogmiscursos/dialogmiscursos.component';
import { DialogcursoComponent } from './components/curso/dialogcurso/dialogcurso.component';
import { DialogcreatecursoComponent } from './components/curso/dialogcreatecurso/dialogcreatecurso.component';
import { DialogeditcursoComponent } from './components/curso/dialogeditcurso/dialogeditcurso.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { DialogcreatepruebaComponent } from './components/curso/dialogcreateprueba/dialogcreateprueba.component';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    QuienessomosComponent,
    GaleriaComponent,
    BeneficiariosComponent,
    CursosComponent,
    PopupComponent,
    RegisterComponent,
    InicioComponent,
    PopupverticalComponent,
    LoginComponent,
    DialogcursosComponent,
    DialogmiscursosComponent,
    DialogcursoComponent,
    DialogcreatecursoComponent,
    DialogeditcursoComponent,
    DialogcreatepruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
