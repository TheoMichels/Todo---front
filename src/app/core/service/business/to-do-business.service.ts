import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Page } from '../../model/Page';
import { TodoService } from '../api/to-do.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoBusinessService {

  selectedTodoPage$ = new BehaviorSubject<Page>(new Page());

  constructor(
    private todoService: TodoService
  ) { }

  public selectTodoPage(id: number): void {
    this.todoService.retrieveTodoPage(id).subscribe( page => this.selectedTodoPage$.next(page));
  }

  public completeTask(id: number): void {
    
  }
}
