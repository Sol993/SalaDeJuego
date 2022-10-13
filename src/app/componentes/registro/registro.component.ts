import { Component, OnInit } from '@angular/core';
import { SaladejuegoservicioService } from 'src/app/servicios/saladejuegoservicio.service';
import { Router } from '@angular/router';
import { Logdeusuarios } from 'src/app/clases/logdeusuarios';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form = {
    email: '',
    password: '',
    confirmPassword: ''
  };
  coincidencia : string = "";
  logUsuario: Logdeusuarios = new Logdeusuarios();
  usuario : Usuario = new Usuario();

  constructor(private _auth : SaladejuegoservicioService, private _router : Router) { }

  ngOnInit(): void {
  }
  
  registro(form: any){
    if(this.form.password === this.form.confirmPassword){

      this._auth.registro(this.form.email,this.form.password).then(res=>{
        if(res != null){
          let hoy = new Date(Date.now()).toLocaleString();
          this.usuario.idUsuario = res.user?.uid;          
          this.usuario.email = this.form.email;

          this.usuario.fechaCreacion = hoy;

          this._auth.guardarUsuario(this.usuario).then(() => {
          
          });;
          
          this.logUsuario.email =this.form.email;
          this.logUsuario.fecha = hoy;

          this._auth.crearLogUsuario(this.logUsuario).then(() => {
          });
    

          this._router.navigate(['home']);
      }
      });
   } else{
     this.coincidencia = "Las contraseñas deben coincidir";
   }
  }

}
