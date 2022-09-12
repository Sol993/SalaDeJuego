import { Component, OnInit } from '@angular/core';
import { SaladejuegoservicioService } from 'src/app/servicios/saladejuegoservicio.service';
import { Router } from '@angular/router';
import { Logdeusuarios } from 'src/app/clases/logdeusuarios';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public email : string = "";
  public password : string = "";
  public passwordRepeat : string = "";
  
  logUsuario: Logdeusuarios = new Logdeusuarios();

  constructor(private _auth : SaladejuegoservicioService, private _router : Router) { }

  ngOnInit(): void {
  }
  registro():void{
    this._auth.registro(this.email,this.password).then(res=>{
      if(res != null){
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        
        this.logUsuario.email=this.email;
        this.logUsuario.fecha= hoy.toUTCString();

        this._auth.crearLogUsuario(this.logUsuario).then(() => {
        });

        this._router.navigate(['home']);
     }
    });
  }

}
