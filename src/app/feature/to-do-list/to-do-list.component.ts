import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core/model/Page';
import { TodoService } from 'src/app/core/service/api/to-do.service';
import { ToDoBusinessService } from 'src/app/core/service/business/to-do-business.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  pages!: Observable<Page[]>;

  constructor(
    private todoService: TodoService,
    private todoBusinessService: ToDoBusinessService
  ) {}

  ngOnInit(): void {
    this.pages = this.todoService.retrieveAllTodoPages();
    // Set selected page to first page
    this.pages.subscribe( pages => {
      if (pages.length > 0) {
        this.todoBusinessService.selectedTodoPage$.next(pages[0]);
      }
    });
  }

  public onTodoPage(id: number): void {
    this.todoBusinessService.selectTodoPage(id);
  }

}
