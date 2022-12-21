import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoPage } from '../../model/TodoPage';
import { TodoService } from '../api/to-do.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoBusinessService {

  selectedTodoPage$ = new BehaviorSubject<TodoPage>(new TodoPage());

  constructor(
    private todoService: TodoService
  ) { }

  public selectTodoPage(id: number): void {
    this.todoService.retrieveTodoPage(id).subscribe( page => this.selectedTodoPage$.next(page));
  }

  public completeTask(id: number): void {
    
  }
}
