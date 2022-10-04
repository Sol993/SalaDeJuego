import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulojuegoRoutingModule } from './modulojuego-routing.module';
import { ModulojuegoComponent } from './modulojuego.component';
import { MayorOMenorComponent } from './mayor-omenor/mayor-omenor.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MiJuegoComponent } from './mi-juego/mi-juego.component';
import { PreguntadoComponent } from './preguntado/preguntado.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModulojuegoComponent,
    MayorOMenorComponent,
    AhorcadoComponent,
    MiJuegoComponent,
    PreguntadoComponent
  ],
  imports: [
    CommonModule,
    ModulojuegoRoutingModule,
    FormsModule
  ]
})
export class ModulojuegoModule { }
