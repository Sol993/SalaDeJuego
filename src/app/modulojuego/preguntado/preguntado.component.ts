import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';

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

  constructor(private _service: PaisesService) {}

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
    } else {
      this.iniciarJuego();
    }
    if (this.puntaje == 250) {
      this.gano=true;
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

}
