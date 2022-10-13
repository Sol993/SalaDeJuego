import { Component, OnInit } from '@angular/core';
import { Resultadojuegos } from 'src/app/clases/resultadojuegos';
import { SaladejuegoservicioService } from 'src/app/servicios/saladejuegoservicio.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  palabras = [
    'CASA',
    'BOTELLA',
    'TELEVISION',
    'TERMO',
    'COMPUTADORA',
    'CELULAR',
    'CARAMELO',
    'PLAZA',
    'CHUPETE',
    'REMEDIO',
    'PERRO',
    'MOTO',
    'MONTAÑA',
    'MAR',
    'CARRO',
    'CABALLO',
    'FLORES',
    'ROSA',
    'MARIPOSA',
    'FOCA',
    'ARCO',
  ];
  palabra = '';
  palabraOculta = '';

  intentos = 0;
  vidas = 6;
  gano = false;
  perdio = false;

  letras = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  puntaje : number = 0;
  puntajeFinal : Resultadojuegos = new Resultadojuegos();
  logueado: boolean = false;
  usuario: any;

  constructor(private _serv : SaladejuegoservicioService) {
    this.palabra =
      this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.palabraOculta = '_ '.repeat(this.palabra.length);

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

  ngOnInit() {}

  comprobar(letra: string, event: any) {
    event.target.disabled = true;
    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(' ');

    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        palabraOcultaArr[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();
  }

  verificaGane() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if (palabraEvaluar === this.palabra) {
      this.gano = true;
      this.puntaje = this.palabra.length;
      this.guardarResultado();
    }

    if (this.intentos >= this.vidas) {
      this.perdio = true;
      console.log('Usuario PERDIO');
    }
  }

  existeLetra(letra: string) {
    if (this.palabra.indexOf(letra) >= 0) {
      //console.log('La letra existe '+letra);
    } else {
      //console.log('La letra NO existe '+letra);
      this.intentos++;
    }
  }

  reiniciarJuego(){
    location.href = 'juegos/ahorcado';
  }

  guardarResultado() {
    if(this.logueado){
      this.puntajeFinal.juego = "Ahorcado";
      this.puntajeFinal.usuario = this.usuario.uid;
      this.puntajeFinal.email = this.usuario.email;
      this.puntajeFinal.fecha = new Date(Date.now()).toLocaleString();
      this.puntajeFinal.puntaje = this.puntaje;
      
      this._serv.guardarPuntaje(this.puntajeFinal);

    }
  
  }


  }
 
