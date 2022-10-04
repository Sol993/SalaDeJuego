import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayorOMenorComponent } from './mayor-omenor/mayor-omenor.component';
import { MiJuegoComponent } from './mi-juego/mi-juego.component';
import { ModulojuegoComponent } from './modulojuego.component';
import { PreguntadoComponent } from './preguntado/preguntado.component';

const routes: Routes = [
  { path: '', component: ModulojuegoComponent },
  {path:"mayoromenor",component:MayorOMenorComponent},
  {path:"ahorcado",component:AhorcadoComponent},
  {path:"preguntado",component:PreguntadoComponent},
  {path:"adivinalapelicula",component:MiJuegoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulojuegoRoutingModule { }
