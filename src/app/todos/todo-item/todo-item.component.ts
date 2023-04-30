import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{

  editando:boolean=false;
  usuarioEdit:Usuario | undefined;
 


  @Input() todo:Usuario | undefined;
  @ViewChild('inputFisico') inputFisico?:ElementRef;
  formularioDatos: any;
  ngOnInit(): void {
    
  }
  editar(todo:any){
      
      this.editando=true
      
      this.inputFisico?.nativeElement.select();
      this.usuarioEdit=todo
      console.log(this.usuarioEdit)
 


  }
  terminarEdicion(){
    this.editando=false;
  }

}
