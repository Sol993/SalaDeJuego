import { Component, OnInit } from '@angular/core';
import { Resultadojuegos } from 'src/app/clases/resultadojuegos';
import { SaladejuegoservicioService } from 'src/app/servicios/saladejuegoservicio.service';
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
  logueado: boolean = false;
  usuario: any;
  puntajeFinal : Resultadojuegos = new Resultadojuegos();

  constructor(private _serv : SaladejuegoservicioService) {

    this._serv.getInfoUsuarioLoggeado().subscribe(res => {
      if (res !== null) {
        this.logueado = true;
        this.usuario = res;
        console.log(this.usuario);
        
      } else {
        this.logueado = false;
      }
    })
  }

  ngOnInit() {
    this.mazo.shuffle();
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
       this.guardarResultado() 
    }

    if (this.mazo.length() == 0) {
      this.gano=true;
      this.guardarResultado() 
    }
  }
  reiniciarJuego(){
    location.href = 'juegos/mayoromenor';
  }

  guardarResultado() {
    if(this.logueado){
      this.puntajeFinal.juego = "Mayor o Menor";
      this.puntajeFinal.usuario = this.usuario.uid;
      this.puntajeFinal.email = this.usuario.email;
      this.puntajeFinal.fecha = new Date(Date.now()).toLocaleString();
      this.puntajeFinal.puntaje = this.puntaje;
      
      this._serv.guardarPuntaje(this.puntajeFinal);

    }
  
  }


  
}
