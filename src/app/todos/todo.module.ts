import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//necesitamos importar tb ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListaComponent } from './todo-lista/todo-lista.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoListaComponent,
    TodoItemComponent,
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports:[
    TodoPageComponent
  ]
})
export class TodoModule { }
