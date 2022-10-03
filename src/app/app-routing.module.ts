import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuiensoyComponent } from './componentes/quiensoy/quiensoy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SaladechatsComponent } from './componentes/saladechats/saladechats.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"sobremi",component:QuiensoyComponent},
  {path:"registro",component:RegistroComponent},
  {path:"saladechats",component:SaladechatsComponent},
  {path: 'juegos', loadChildren: () => import('./modulojuego/modulojuego.module').then(m => m.ModulojuegoModule) },
  {path:"**",component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
