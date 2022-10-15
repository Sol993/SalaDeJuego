import { Component, OnInit } from '@angular/core';
import { SaladejuegoservicioService} from 'src/app/servicios/saladejuegoservicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Logdeusuarios } from 'src/app/clases/logdeusuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email : string = "";
  public password : string = "";
  logUsuario : Logdeusuarios = new Logdeusuarios();

  constructor(private _auth : SaladejuegoservicioService, private _router : Router) { }

  ngOnInit(): void {
  }

  logIn():void
  {
    this._auth.login(this.email,this.password).then(res => { 
     if (res !== null) {
      localStorage.setItem("usuario",JSON.stringify(res));
      const hoy = new Date(Date.now().toLocaleString());
      
      this.logUsuario.email=this.email;
      this.logUsuario.fecha= hoy.toUTCString();

      this._auth.crearLogUsuario(this.logUsuario).then(() => {
       
      });
      
      this._router.navigate(['/home']);

     }else{
      Swal.fire({
        title: 'Ups, ha ocurrido un error. Verifique el usuario y contraseña',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/assets/imagenes/nyan-cat.gif")
          left top
          no-repeat
        `
      })
     }

    });
  }
  usuarioRegistrado(){
    this.email="sol993@utn.com";
    this.password="123456";
  }


}
