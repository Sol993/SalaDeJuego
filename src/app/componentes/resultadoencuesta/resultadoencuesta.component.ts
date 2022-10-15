import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Encuesta } from 'src/app/clases/formulario';
import { SaladejuegoservicioService } from 'src/app/servicios/saladejuegoservicio.service';

@Component({
  selector: 'app-resultadoencuesta',
  templateUrl: './resultadoencuesta.component.html',
  styleUrls: ['./resultadoencuesta.component.css']
})
export class ResultadoencuestaComponent implements OnInit {

  arrayEncuesta? : Encuesta[];

  constructor(private _auth : SaladejuegoservicioService) { }

  ngOnInit(): void {
    this.obtenerEncuesta()
  }

  obtenerEncuesta(): void {
    this._auth.traerListadoEncuesta().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.arrayEncuesta = data;
    });
  }
}
