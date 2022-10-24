import { Component, OnInit } from '@angular/core';
import { SaladejuegoservicioService } from 'src/app/servicios/saladejuegoservicio.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public logueado: boolean = false;
  public logueadoAdmin: boolean = false;
  public usuario: any;

  constructor(private _auth: SaladejuegoservicioService,private _router : Router) { }

  ngOnInit(): void {
    this.usuarioLogueado();
  }


  usuarioLogueado() {
    this._auth.getInfoUsuarioLoggeado().subscribe(res => {
      if (res !== null) {
        this.logueado = true;

        this._auth.obtenerUsuarioPorID(res.uid).snapshotChanges().pipe(
          map(changes =>
            changes.map(c =>
              ({ id: c.payload.doc.id, ...c.payload.doc.data() })
            )
          )
        ).subscribe(data => {
          this.usuario = data[0];
          if (this.usuario.rol == "Administrador") {
            this.logueadoAdmin=true;
          } else {
            this.logueadoAdmin = false;
          }

        });

      } else {
        this.logueado = false;
      }
    })
  }
  cerrarSesion(): void {
    this._auth.logOut().then (res=>{
      this.logueado= false;
      this._router.navigate(['/']);
    });
  }

}
