import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from './modelos/usuario.model';
//PRUEBA
import { FormBuilder, FormGroup, NgModel, Validators, } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'crudParaRedux';
  cargando: boolean = false;
  formulario1!: FormGroup;
  id:number=4;
  empleadoSeleccionado:Usuario=new Usuario(0,"","","") //para manejar la edición
  usuarioArray: Usuario[] = [
    {
      id: 1,
      email: "xxx@gmail.co,",
      nombre: "vicente",
      apellido: "morata"
    },
    {
      id: 2,
      email: "xxx@gmail.co,",
      nombre: "alejandra",
      apellido: "Raja"
    },
    {
      id: 3,
      email: "xxx@gmail.co,",
      nombre: "jose",
      apellido: "Raja"
    },
    {
      id: 4,
      email: "xxx@gmail.co,",
      nombre: "pitu",
      apellido: "Raja"
    },

  ];

  constructor(
    private formulario: FormBuilder,

  ) {}


  ngOnInit() {
    
    this.formulario1 = this.formulario.group({

      id:"",
      email: ["",Validators.email],
      nombre: ["",Validators.pattern('^[A-Z][a-z]*$')], //una validacion para que la primera sea mayúscula
      apellido: ["",Validators.pattern('^[A-Z][a-z]*$')]
    });
  

  }
  
  cargar() {
    this.cargando = true;
    
    //console.log(this.usuarioArray)
  }
  borrar(id: number) {
    
    let lista = this.usuarioArray.filter(item => item.id !== id);
    
    //console.log(lista)
    //console.log(this.id)
    this.usuarioArray = lista

  }
  agregarOEditarUsuario(usuario:Usuario) {

    /*const {descripcion,numero}=this.ingresoForm.value;
    const ingresoEgreso = new IngresoEgreso(descripcion,numero,this.tipo) */
    this.id=0;

    console.log(usuario)
    //this.id++
    
    usuario.id=this.usuarioArray.length+1

        this.usuarioArray.push(usuario)
        console.log(this.usuarioArray)
       // this.formulario1.reset()//reseteamos el form
  }

  editar(usuario:Usuario){
    this.empleadoSeleccionado=usuario
    console.log(this.empleadoSeleccionado)
 /*   this.formulario1.nombre=usuario.nombre
    this.formulario1.email=usuario.email
    this.formulario1.apellidos1=usuario.apellido*/

    
  }



}





