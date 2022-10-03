import { Component, OnInit } from '@angular/core';
import { Carta } from '../clases/carta';
import { Mazo } from '../clases/mazo';
import { Palo } from '../clases/palo';

@Component({
  selector: 'app-mayor-omenor',
  templateUrl: './mayor-omenor.component.html',
  styleUrls: ['./mayor-omenor.component.css']
})
export class MayorOMenorComponent implements OnInit {
  carta: Carta = new Carta(1,Palo.Pica);
  mazo: Mazo = new Mazo();
  vidas: number = 3;
  puntaje: number = 0;
  gano = false;
  perdio = false;

  constructor() {}

  ngOnInit() {
    this.mazo.shuffle();
    this.carta = this.mazo.draw();
  }

  jugar(carta: Carta, mayor_menor: string): void {
    let valorActual = carta.valor;

    this.carta = this.mazo.draw();

    if (mayor_menor == 'mayor') {
      if (this.carta.valor > valorActual) {
        this.puntaje++;
      } else {
        this.vidas--;
      }
    } else {
      if (this.carta.valor < valorActual) {
        this.puntaje++;
      } else {
        this.vidas--;
      }
    }

    if (this.vidas == 0) {
            this.perdio=true;
    }

    if (this.mazo.length() == 0) {
      this.gano=true;
    }
  }
  reiniciarJuego(){
    location.href = 'juegos/mayoromenor';
  }


  
}
