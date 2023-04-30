import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app.reducer';
import { crearTodo } from '../todo.actions';
//import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  formularioDatos!: FormGroup;
  usuario:any;
  

  constructor(private store: Store<AppState>,
              private formbuilder: FormBuilder) {
             
          this.formularioDatos = this.formbuilder.group(

            {
              nombre: ["", [Validators.pattern('^[A-Z][a-z]*$'),Validators.required]],
              apellido: ["", [Validators.pattern('^[A-Z][a-z]*$'),Validators.required]], //una validacion para que la primera sea mayúscula
              email: ["", [Validators.email,Validators.required]],
            }
          )

  }
  ngOnInit() {
    

  }
  agregar() {

    if (this.formularioDatos?.invalid) { return; }
    this.usuario = this.formularioDatos.value
    
    //console.log(this.formularioDatos?.value)
    console.log(this.usuario)
    this.store.dispatch(crearTodo(this.usuario))
    this.formularioDatos?.reset();
  }

}
