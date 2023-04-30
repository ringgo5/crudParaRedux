import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app.reducer';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-todo-lista',
  templateUrl: './todo-lista.component.html',
  styleUrls: ['./todo-lista.component.css']
})
export class TodoListaComponent implements OnInit{

  todos:Usuario[]=[]

  constructor(
    private store: Store<AppState>
  ){}
  ngOnInit(): void {

    this.store.select('usuarios').subscribe(todos=>this.todos=todos)
    
  }

}
