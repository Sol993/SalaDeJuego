import { Injectable } from '@angular/core';
import{ AngularFireAuth }from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2';


import firebase from '@firebase/app-compat';
import { Logdeusuarios } from '../clases/logdeusuarios';
import { Saladechats } from '../clases/saladechats';


@Injectable({
  providedIn: 'root'
})
export class SaladejuegoservicioService {
  private logCollectionName: AngularFirestoreCollection<Logdeusuarios>;
  private salaDechats: AngularFirestoreCollection<Saladechats>;


  constructor(private _auth :AngularFireAuth, private _db :AngularFirestore) {
    this.logCollectionName = _db.collection('logUsuarios');
    this.salaDechats = _db.collection('salaDeChats');

   }

  //login y registro
  async login(email:string, password: string)
  {
    try
    {
      return await this._auth.signInWithEmailAndPassword(email,password);
    }
    catch(error)
    {
      console.log("No se ha podio realizar el login "+ error);
      return null;
    }
  }
  async registro(email:string,password:string)
  {
    try
    {
      return await this._auth.createUserWithEmailAndPassword(email,password);
    }
    catch(error)
    {
      Swal.fire({
        title: 'No se ha podio realizar el registro ' + error,
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
      return null;
    }
  }
  async logOut()
  {
    this._auth.signOut();
  }
  getInfoUsuarioLoggeado()
  {
    return this._auth.authState;
  }
//Base de datos

 crearLogUsuario(loguser: Logdeusuarios): any {
  return this.logCollectionName.add({ ...loguser });
}
sumarMensaje(mensaje: Saladechats): any {
  return this.salaDechats.add({ ...mensaje });
}
getSalaDeChats(): AngularFirestoreCollection<Saladechats> {
  return this.salaDechats;
}
}