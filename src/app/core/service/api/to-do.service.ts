import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, Observable, of, tap } from 'rxjs';
import { TodoPage } from '../../model/TodoPage';
import { TodoTask } from '../../model/TodoTask';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl: string = 'http://localhost:8080/api/todo/pages';

  todoPage1: TodoPage = new TodoPage();

  todoPage2: TodoPage = new TodoPage();

  constructor(private http: HttpClient) {}

  public retrieveAllTodoPages(): Observable<TodoPage[]> {
    return this.http.get<TodoPage[]>(this.baseUrl);
  }

  public retrieveTodoPage(id: number): Observable<TodoPage> {
    return this.http.get<TodoPage>(this.baseUrl + '/get/' + id);
  }
}