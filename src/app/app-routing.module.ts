import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiariosComponent } from './components/beneficiarios/beneficiarios.component';
import { CursosComponent } from './components/curso/cursos/cursos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/inicio', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'inicio', component: InicioComponent },
            { path: 'quienessomos', component: QuienessomosComponent },
            { path: 'galeria', component: GaleriaComponent },
            { path: 'beneficiarios', component: BeneficiariosComponent},
            { path: 'registro', component: RegisterComponent },
            { path: 'login', component: LoginComponent }
        ],
    },
    { path: 'curso', component: CursosComponent },
    { path: '**', redirectTo: '/home/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
