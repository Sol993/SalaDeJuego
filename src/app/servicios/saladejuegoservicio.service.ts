import { Injectable } from '@angular/core';
import{AngularFireAuth}from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat'

@Injectable({
  providedIn: 'root'
})
export class SaladejuegoservicioService {

  constructor(private _auth :AngularFireAuth) { }
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
      console.log("No se ha podio realizar el registro "+ error);
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
}
