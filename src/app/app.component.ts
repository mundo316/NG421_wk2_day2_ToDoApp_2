import { Component,OnInit } from '@angular/core';
import { ITodo } from './interfaces/itodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Todos';
  todoList: ITodo [] = [];
  todoTitle: string;
  todoId: number = 0;
  
  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [
      // example of how to make an item in todo list
      { title: 'Install Angular CLI', id: 1, description: ""},
    
    ];
  }
  addTodo():void {
    this.todoList.push({
      title: this.todoTitle,
      id: this.todoId,
      description: this.todoTitle
    });
    
    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
  }
  deleteTodo(todo:any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

}
