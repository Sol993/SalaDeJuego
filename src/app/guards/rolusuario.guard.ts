import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SaladejuegoservicioService } from '../servicios/saladejuegoservicio.service';

@Injectable({
  providedIn: 'root'
})

export class RolusuarioGuard implements CanActivate {
  
  admin: boolean = false;
  usuario: any;

  constructor(private router:Router, private _serv:SaladejuegoservicioService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
      this._serv.getInfoUsuarioLoggeado().subscribe(res => {
        if (res !== null) {
          this._serv.obtenerUsuarioPorID(res.uid).snapshotChanges().pipe(
            map(changes =>
              changes.map(c =>
                ({ id: c.payload.doc.id, ...c.payload.doc.data() })
              )
            )
          ).subscribe(data => {
            this.usuario = data[0];
            console.log(this.usuario);
            if(this.usuario.rol == "Administrador"){
                this.admin = true;
            } else{
              this.router.navigate(['home']);

            }
          });;
          
        }
      })

    return this.admin;
  }
  
}
