import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{

  @Input() todo:Usuario | undefined;
  ngOnInit(): void {
    
  }

}
