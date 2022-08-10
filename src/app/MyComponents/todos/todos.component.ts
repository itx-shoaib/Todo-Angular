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

}
