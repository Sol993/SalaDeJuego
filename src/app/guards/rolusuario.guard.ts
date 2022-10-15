import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { map, Observable } from 'rxjs';
import { Rol } from '../clases/rol';
import { SaladejuegoservicioService } from '../servicios/saladejuegoservicio.service';

@Injectable({
  providedIn: 'root'
})

export class RolusuarioGuard implements CanActivate {

  admin: boolean = false;
  usuario: any;

  constructor(private router: Router, private _serv: SaladejuegoservicioService) {
  
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
   this.usuario = this._serv.currentUser;
    if (this.usuario && this.usuario.rol == Rol.Administrador) {
      this.admin = true;
    } else {
      this.router.navigate(['home']);

    }     
    return this.admin; 
      
     
     
    /* this._serv.getInfoUsuarioLoggeado().subscribe(res => {
        if (res !== null) {
          this.usuarioLoggeado = res;
          this._serv.obtenerUsuarioPorID(this.usuarioLoggeado.uid).snapshotChanges().pipe(
            map(changes =>
              changes.map(c =>
                ({ id: c.payload.doc.id, ...c.payload.doc.data() })
              )
            )
          ).subscribe(data => {
            this.usuario = data[0];
            console.log(this.usuario);   
            if (this.usuario && this.usuario.rol == Rol.Administrador) {
              return this.admin;
            } else {
              this.router.navigate(['home']);
      
            }      
      
          });
        }
      });*/

  }

}
  

