import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodosItemComponent } from './myComponents/todos-item/todos-item.component';
import { AddTodosComponent } from './myComponents/add-todos/add-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosItemComponent,
    AddTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
