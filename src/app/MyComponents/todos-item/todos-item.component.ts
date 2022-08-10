import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {
  // Adding input (as in react when we pass a props same as it in angular we have to also define it in input)
  @Input() item : Todo;
  constructor() { }

  ngOnInit(): void {
  }

}
