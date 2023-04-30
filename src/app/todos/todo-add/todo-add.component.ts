import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app.reducer';
import { crearTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit{
  
    formularioDatos!:FormControl;

    constructor(private store:Store<AppState>,
                private formbuilder: FormBuilder){
      
    }
  ngOnInit(): void {}
  agregar(){
    this.formularioDatos=new FormControl(
      {

        
        email: ["",Validators.email],
        nombre: ["",Validators.pattern('^[A-Z][a-z]*$')], //una validacion para que la primera sea mayúscula
        apellido: ["",Validators.pattern('^[A-Z][a-z]*$')]
      }
    )
    if(this.formularioDatos.invalid){return;}
    this.store.dispatch(crearTodo({nombre: this.formularioDatos.value, apellido: this.formularioDatos.value, email: this.formularioDatos.value}))
    this.formularioDatos.reset();
  }

}
