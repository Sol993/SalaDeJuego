export class Usuario {
    nombre:string|undefined;
    clave:string|undefined;
    mostrar(){
        console.log(this.nombre,this.clave);
    }
}
