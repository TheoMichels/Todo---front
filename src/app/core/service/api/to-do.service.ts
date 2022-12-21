import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, Observable, of, tap } from 'rxjs';
import { Page } from '../../model/Page';
import { Task } from '../../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl: string = 'http://localhost:8080/api/todo/pages';

  constructor(private http: HttpClient) {}

  public retrieveAllTodoPages(): Observable<Page[]> {
    return this.http.get<Page[]>(this.baseUrl);
  }

  public retrieveTodoPage(id: number): Observable<Page> {
    return this.http.get<Page>(this.baseUrl + '/get/' + id);
  }

  public createTask(task: Task, pageId: number): Observable<Task> {
    return this.http.post<Task>(this.baseUrl + pageId + '/tasks/create', JSON.stringify(task))
  }

  public updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.baseUrl + '/tasks/update', JSON.stringify(task))
  }
}