import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Resultadojuegos } from 'src/app/clases/resultadojuegos';
import { SaladejuegoservicioService } from 'src/app/servicios/saladejuegoservicio.service';

@Component({
  selector: 'app-listadoresultados',
  templateUrl: './listadoresultados.component.html',
  styleUrls: ['./listadoresultados.component.css']
})
export class ListadoresultadosComponent implements OnInit {

  arrayResultadoJuegos? : Resultadojuegos[];
  public usuario: any;
  public logueado: boolean = false;


  constructor(private _auth : SaladejuegoservicioService) 
  {

  }

  ngOnInit(): void {
    this.obtenerListado();
    this.consultaSiEstaLogeado();
    
  }

  obtenerListado(): void {
    this._auth.traerListadoResultado().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.arrayResultadoJuegos = data;
    });
  }
consultaSiEstaLogeado(){
  this._auth.getInfoUsuarioLoggeado().subscribe(res => {
    if (res !== null) {
      this.logueado = true;
      this.usuario = res;

    } else {
      this.logueado = false;
    }
  })
}
}
