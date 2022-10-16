import { Injectable } from '@angular/core';
import{ AngularFireAuth }from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2';


import firebase from '@firebase/app-compat';
import { Logdeusuarios } from '../clases/logdeusuarios';
import { Saladechats } from '../clases/saladechats';
import { Resultadojuegos } from '../clases/resultadojuegos';
import { Usuario } from '../clases/usuario';
import { Encuesta } from '../clases/formulario';


@Injectable({
  providedIn: 'root'
})
export class SaladejuegoservicioService {
  private logCollectionName: AngularFirestoreCollection<Logdeusuarios>;
  private salaDechats: AngularFirestoreCollection<Saladechats>;
  private resultadosJuegos: AngularFirestoreCollection<Resultadojuegos>;
  private usuario: AngularFirestoreCollection<Usuario>;
  public currentUser: any;
  private encuesta: AngularFirestoreCollection<any>;


  constructor(private _auth :AngularFireAuth, private _db :AngularFirestore) {
    this.logCollectionName = _db.collection('logUsuarios');
    this.salaDechats = _db.collection('salaDeChats');
    this.resultadosJuegos = _db.collection('resultadoJuegos');
    this.usuario = _db.collection('usuarios');
    this.encuesta = _db.collection('encuesta');


   }

  //login y registro
 async login(email:string, password: string)
  {
    try
    {
     // return await this._auth.signInWithEmailAndPassword(email,password);
     return this._auth.signInWithEmailAndPassword(email, password)
     .then((user)=>{
       this._db.collection("usuarios").ref.where("email", "==", user.user?.email).onSnapshot(snap =>{
         snap.forEach(userRef => {
           this.currentUser = userRef.data();
           localStorage.setItem("usuario",JSON.stringify(this.currentUser))
           localStorage.setItem('rol',this.currentUser.rol);
           console.log(this.currentUser.rol);
         })
       })
      })
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
    localStorage.removeItem('rol'),
    localStorage.removeItem('usuario')
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
  guardarUsuario(user: Usuario): any {
    return this.usuario.add({ ...user });
  }

  obtenerUsuarioPorID(idFilter: string):  AngularFirestoreCollection<Usuario>{
   return this._db.collection('usuarios', ref => ref.where('idUsuario','==', idFilter ));
  }

  //ResultadoJuego
  guardarPuntaje(puntaje: Resultadojuegos): any {
    return this.resultadosJuegos.add({ ...puntaje });
  }
  traerListadoResultado(): AngularFirestoreCollection<Resultadojuegos> {
    return this.resultadosJuegos;
  }
  
  ///Encuestas
  agregarEncuesta(encues: any): any {
    return this.encuesta.add({ ...encues});
  }
  traerListadoEncuesta(): AngularFirestoreCollection<Encuesta> {
    return this.encuesta;
  }
  


}
