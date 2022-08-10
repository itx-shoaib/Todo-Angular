import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todo:Todo[]
  constructor() {
    this.todo = [
      {
        id:1,
        title:'Go to eat',
        desc:'This is for a static description',
        active:true
      },
      {
        id:2,
        title:'Go to sleep',
        desc:'This is for a static description',
        active:true
      },
      {
        id:3,
        title:'Go to work',
        desc:'This is for a static description',
        active:true
      }

    ]
   }

  ngOnInit(): void {
  }

  Deleteitem(item:Todo){
   console.log(item);
  //  Logic for deleting todo in the array
   const index = this.todo.indexOf(item)
   this.todo.splice(index,1)
  }
  Addtodo(item:Todo){
   console.log(item);
  //  Logic for Adding todo in the array
   this.todo.push(item)
  }

}
