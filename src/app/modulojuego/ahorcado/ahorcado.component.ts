import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.palabra =
      this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.palabraOculta = '_ '.repeat(this.palabra.length);
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
      console.log('Usuario GANO');
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

}
