import { Component, OnInit } from '@angular/core';
import { Resultadojuegos } from 'src/app/clases/resultadojuegos';
import { PaisesService } from 'src/app/servicios/paises.service';
import { SaladejuegoservicioService } from 'src/app/servicios/saladejuegoservicio.service';

@Component({
  selector: 'app-preguntado',
  templateUrl: './preguntado.component.html',
  styleUrls: ['./preguntado.component.css']
})
export class PreguntadoComponent implements OnInit {

  paises: any;
  opciones: Array<any> = [];
  respuesta: any;
  cantidadOpciones: number = 4;
  vidas: number = 3;
  puntaje: number = 0;
  gano = false;
  perdio = false;
  logueado: boolean = false;
  usuario: any;
  puntajeFinal : Resultadojuegos = new Resultadojuegos();
  
  constructor(private _service: PaisesService, private _serv :SaladejuegoservicioService) {
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
    this._service.getCountries().subscribe((response) => {
      this.paises = response;
      this.iniciarJuego();
    });
  }

  comprobar(pais: any) {
    if (pais.name.trim() == this.respuesta.name.trim()) {
      this.puntaje++;
    } else {
      this.vidas--;
    }

    if (this.vidas == 0) {
     this.perdio=true;
     this.guardarResultado();
    } else {
      this.iniciarJuego();
    }
    if (this.puntaje == 250) {
      this.gano=true;
      this.guardarResultado();
    }
  }

  iniciarJuego() {
    this.opciones = [];

    this.respuesta =
      this.paises[Math.floor(Math.random() * this.paises.length)];
    this.opciones.push(this.respuesta);
    this.paises.pop(this.respuesta);

    for (let i = 0; i <= this.cantidadOpciones; i++) {
      let respuestaErronea =
        this.paises[Math.floor(Math.random() * this.paises.length)];
      this.opciones.push(respuestaErronea);
    }

    for (var i = this.opciones.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));

      var temp = this.opciones[i];
      this.opciones[i] = this.opciones[j];
      this.opciones[j] = temp;
    }
  }
  reiniciarJuego(){
    location.href = 'juegos/preguntado';
  }

  guardarResultado() {
    if(this.logueado){
      this.puntajeFinal.juego = "Preguntado Paises";
      this.puntajeFinal.usuario = this.usuario.uid;
      this.puntajeFinal.email = this.usuario.email;
      this.puntajeFinal.fecha = new Date(Date.now()).toLocaleString();
      this.puntajeFinal.puntaje = this.puntaje;
      
      this._serv.guardarPuntaje(this.puntajeFinal);

    }
  
  }

}
