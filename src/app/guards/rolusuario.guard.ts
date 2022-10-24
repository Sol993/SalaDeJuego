import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SaladejuegoservicioService } from '../servicios/saladejuegoservicio.service';

@Injectable({
  providedIn: 'root'
})

export class RolusuarioGuard implements CanActivate {

  constructor(private router: Router, private _serv: SaladejuegoservicioService) {
  
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      let id = localStorage.getItem("usuarioID");
      if(id !== null){

      return this._serv.obtenerUsuarioPorID(id).snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ id: c.payload.doc.id, ...c.payload.doc.data() })
          )
        )
      ).pipe(map((data) => {
        if ( data[0].rol == "Administrador") {
          return true;
        } else {

          this.router.navigate(['accesodenegado']);
          return false;
        }    
  
      }));
    } else{
      this.router.navigate(['accesodenegado']);
      return false;
    }
      /*return this._serv.getInfoUsuarioLoggeado().pipe(map((res) => {
        if(res != null){
          return true
        } else{
          return false
        }   
      }));


    /*let rol= localStorage.getItem("rol");
   
    if ( rol == "Administrador") {
      this.admin = true;
    } else {
      this.router.navigate(['accesodenegado']);

    }     
  return this.admin;*/


 
      
     
     
    /* 
     

    this._serv.getInfoUsuarioLoggeado().subscribe(res => {
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
  

