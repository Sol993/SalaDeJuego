import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-mi-juego',
  templateUrl: './mi-juego.component.html',
  styleUrls: ['./mi-juego.component.css']
})
export class MiJuegoComponent implements OnInit {

  peliculas: any;
  respuesta: any;
  titulo: string='';
  constructor(private _service: PeliculasService) {}

  ngOnInit() {
    this._service.getTopMovies().subscribe((response) => {
      this.peliculas = response;
      console.log(this.peliculas.results);
      this.respuesta =
        this.peliculas.results[
          Math.floor(Math.random() * this.peliculas.results.length)
        ];
      console.log(this.respuesta);
    });
  }

  comprobar() {
    if (
      this.titulo.trim().toLowerCase() ==
      this.respuesta.title.trim().toLowerCase()
    ) {
      console.log('exito');
    } else {
      console.log('fallo');
    }
  }

}
