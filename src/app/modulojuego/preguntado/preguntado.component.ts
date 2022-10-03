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

  constructor(private _service: PaisesService) {}

  ngOnInit() {
    this._service.getCountries().subscribe((response) => {
      this.paises = response;

      this.respuesta =
        this.paises[Math.floor(Math.random() * this.paises.length)];
      console.log(this.respuesta);
      this.opciones.push(this.respuesta);
      for (let i = 0; i < this.cantidadOpciones; i++) {
        let respuestaErronea =
          this.paises[Math.floor(Math.random() * this.paises.length)];
        this.opciones.push(respuestaErronea);
      }
    });
  }

}
