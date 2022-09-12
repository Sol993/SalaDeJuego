import { Component, OnInit } from '@angular/core';
import { Saladechats } from 'src/app/clases/saladechats';
import { SaladejuegoservicioService } from 'src/app/servicios/saladejuegoservicio.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-saladechats',
  templateUrl: './saladechats.component.html',
  styleUrls: ['./saladechats.component.css']
})
export class SaladechatsComponent implements OnInit {

  salaDechats : Saladechats= new Saladechats();
  arraySalaDeChats? : Saladechats[];
  mensaje : string= "";
  public logueado: boolean = false;
  public usuario: any;

  constructor(private _auth : SaladejuegoservicioService) {
    this._auth.getInfoUsuarioLoggeado().subscribe(res => {
      if (res !== null) {
        this.logueado = true;
        this.usuario = res;

      } else {
        this.logueado = false;
      }
    })
   }

  ngOnInit(): void {
    this.obtenerChats();
  }

  guardarMensaje(): void {
   

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

        this.salaDechats.usuario = this.usuario.email;
        this.salaDechats.fecha = hoy.toUTCString();
        this.salaDechats.mensaje = this.mensaje;

    this._auth.sumarMensaje(this.salaDechats).then(() => {
      console.log('Created new item successfully!');
    });
    this.mensaje="";

  
  }

  obtenerChats(): void {
    this._auth.getSalaDeChats().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.arraySalaDeChats = data;
    });
  }
}
