import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  title = 'Todos';
  todoList: ITodo [] = [];
  todoTitle: string;
  todoId: number = 0;


  constructor() { }

  addTodo():void {
    this.todoList.push({
      title: this.todoTitle,
      id: this.todoId,
      description: ''
    });
    
    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
    this.todoId++;
  }

  deleteTodo(todo:any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

}
