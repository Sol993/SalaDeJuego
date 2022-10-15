import { Rol } from "./rol";

export class Usuario {
    idUsuario?:string="";
    email:string="";
    fechaCreacion:string="";
    rol:Rol = Rol.Usuario;

    /*mostrar(){
        console.log(this.nombre,this.clave);
    }*/
}
