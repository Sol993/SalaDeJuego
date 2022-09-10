import { Component, OnInit } from '@angular/core';
import { SaladejuegoservicioService } from 'src/app/servicios/saladejuegoservicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public logueado: boolean = false;
  public usuario: any;

  constructor(private _auth: SaladejuegoservicioService,private _router : Router) { }

  ngOnInit(): void {
    this.usuarioLogueado();
  }


  usuarioLogueado() {
    this._auth.getInfoUsuarioLoggeado().subscribe(res => {
      if (res !== null) {
        this.logueado = true;
        this.usuario = res;
        console.log(this.usuario);
      } else {
        this.logueado = false;
      }
    })
  }
  cerrarSesion(): void {
    this._auth.logOut().then (res=>{
      this.logueado= false;
      localStorage.removeItem("usuario");
      this._router.navigate(['/']);
    });
  }

}
