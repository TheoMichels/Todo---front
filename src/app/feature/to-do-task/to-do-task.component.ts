import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/model/Task';
import { Input } from '@angular/core';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.scss']
})
export class ToDoTaskComponent implements OnInit {

  @Input()
  task!: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
