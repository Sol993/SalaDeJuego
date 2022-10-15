import { Component, OnInit } from '@angular/core';
import { Resultadojuegos } from 'src/app/clases/resultadojuegos';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { SaladejuegoservicioService } from 'src/app/servicios/saladejuegoservicio.service';

@Component({
  selector: 'app-mi-juego',
  templateUrl: './mi-juego.component.html',
  styleUrls: ['./mi-juego.component.css']
})
export class MiJuegoComponent implements OnInit {

  peliculas: any;
  respuesta: any;
  titulo: string='';
  gano = false;
  perdio = false;
  titulodepelicula:string='';
  vidas: number = 3;
  puntaje: number = 0;
  logueado: boolean = false;
  usuario: any;
  puntajeFinal : Resultadojuegos = new Resultadojuegos();

  constructor(private _service: PeliculasService,private _serv : SaladejuegoservicioService) 
  {
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
    this._service.getTopMovies().subscribe((response) => {
      this.peliculas = response;
      console.log(this.peliculas.results);
      this.respuesta =
        this.peliculas.results[
          Math.floor(Math.random() * this.peliculas.results.length)
        ];
      console.log(this.respuesta);
      this.titulodepelicula= this.respuesta.title;
    });
  }

  comprobar() {
    if (
      this.titulo.trim().toLowerCase() ==
      this.respuesta.title.trim().toLowerCase() 
    ) {
      console.log('exito');
      this.recargarPelicula();
      this.puntaje = this.puntaje + 5;
      this.titulo='';
      if(this.vidas== 0)
      {
        this.gano = true;
      }
    } else {
      this.vidas--;
      if(this.vidas== 0)
      {
        this.perdio= true;
        this.guardarResultado() 
        console.log('fallo');
      }
    }
  }
  reiniciarJuego(){
    location.href = 'juegos/adivinalapelicula';
  }
  recargarPelicula()
  {
    this._service.getTopMovies().subscribe((response) => {
      this.peliculas = response;
      console.log(this.peliculas.results);
      this.respuesta =
        this.peliculas.results[
          Math.floor(Math.random() * this.peliculas.results.length)
        ];
      console.log(this.respuesta);
      this.titulodepelicula= this.respuesta.title;
    });
  }
  guardarResultado() {
    if(this.logueado){
      this.puntajeFinal.juego = "Adivina la pelicula";
      this.puntajeFinal.usuario = this.usuario.uid;
      this.puntajeFinal.email = this.usuario.email;
      this.puntajeFinal.fecha = new Date(Date.now()).toLocaleString();
      this.puntajeFinal.puntaje = this.puntaje;
      
      this._serv.guardarPuntaje(this.puntajeFinal);

    }
  
  }

}
