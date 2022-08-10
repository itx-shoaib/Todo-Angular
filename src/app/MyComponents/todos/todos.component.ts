import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  localItem : string;
  todo:Todo[]
  constructor() {
    this.localItem = localStorage.getItem("todo")!;
    if ( this.localItem==null) {
      this.todo = [ ]
    }
    else{
      this.localItem = JSON.parse(this.localItem)
    }
   }

  ngOnInit(): void {
  }

  Deleteitem(item:Todo){
   console.log(item);
  //  Logic for deleting todo in the array
   const index = this.todo.indexOf(item)
   this.todo.splice(index,1)
   localStorage.setItem('todo',JSON.stringify(item))
  }
  Addtodo(item:Todo){
   console.log(item);
  //  Logic for Adding todo in the array
   this.todo.push(item)
   localStorage.setItem('todo',JSON.stringify(item))
  }

}
