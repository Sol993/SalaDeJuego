import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Resultadojuegos } from './clases/resultadojuegos';
import { AccesodenegadoComponent } from './componentes/accesodenegado/accesodenegado.component';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuiensoyComponent } from './componentes/quiensoy/quiensoy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ResultadoencuestaComponent } from './componentes/resultadoencuesta/resultadoencuesta.component';
import { SaladechatsComponent } from './componentes/saladechats/saladechats.component';
import { RolusuarioGuard } from './guards/rolusuario.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"sobremi",component:QuiensoyComponent},
  {path:"registro",component:RegistroComponent},
  {path:"saladechats",component:SaladechatsComponent},
  {path:"encuesta",component:EncuestaComponent},
  {path:"accesodenegado",component:AccesodenegadoComponent},
  {path:"listadoencuesta",component:ResultadoencuestaComponent,canActivate: [RolusuarioGuard]},
  {path: 'juegos', loadChildren: () => import('./modulojuego/modulojuego.module').then(m => m.ModulojuegoModule) },
  {path:"**",component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
