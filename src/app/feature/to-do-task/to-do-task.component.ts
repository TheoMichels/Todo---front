import { Component, OnInit } from '@angular/core';
import { TodoTask } from 'src/app/core/model/TodoTask';
import { Input } from '@angular/core';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.scss']
})
export class ToDoTaskComponent implements OnInit {

  @Input()
  task!: TodoTask;

  constructor() { }

  ngOnInit(): void {
  }

}
