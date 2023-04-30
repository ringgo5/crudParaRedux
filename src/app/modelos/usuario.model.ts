export class Usuario {

    public id: number;
    public email: string |undefined;
    public nombre: string;
    public apellido: string | undefined;
    constructor(nombre:string,apellido?:string,email?:string){
        this.nombre=nombre;
        this.id= new Date().getTime();
        this.apellido=apellido;
        this.email=email
        
    }

}