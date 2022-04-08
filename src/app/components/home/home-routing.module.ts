import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeneficiariosComponent } from '../beneficiarios/beneficiarios.component';
import { CursosComponent } from '../curso/cursos/cursos.component';
import { GaleriaComponent } from '../galeria/galeria.component';
import { HomeComponent } from '../home/home.component';
import { InicioComponent } from '../inicio/inicio.component';
import { QuienessomosComponent } from '../quienessomos/quienessomos.component';


const routes: Routes = [
    { path: '', redirectTo: '/home/inicio', pathMatch: 'full' },
    {
        // path: 'home', component: HomeComponent,
        // children: [
        //     { path: 'inicio', component: InicioComponent },
        //     { path: 'quienessomos', component: QuienessomosComponent },
        //     { path: 'galeria', component: GaleriaComponent },
        //     { path: 'beneficiarios', component: BeneficiariosComponent},
        //     { path: 'cursos', component: CursosComponent}
        // ],
    },
    { path: '**', redirectTo: '/home/inicio' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }