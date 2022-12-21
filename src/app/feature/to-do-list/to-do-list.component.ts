import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoPage } from 'src/app/core/model/TodoPage';
import { TodoService } from 'src/app/core/service/api/to-do.service';
import { ToDoBusinessService } from 'src/app/core/service/business/to-do-business.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  pages!: Observable<TodoPage[]>;

  constructor(
    private todoService: TodoService,
    private todoBusinessService: ToDoBusinessService
  ) {}

  ngOnInit(): void {
    this.pages = this.todoService.retrieveAllTodoPages();
  }

  public onTodoPage(id: number): void {
    this.todoBusinessService.selectTodoPage(id);
  }

}
