import { Component, OnInit } from '@angular/core';
import { ToDoModel } from 'src/app/Model/todo.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  todoTask: ToDoModel[] = [
    {
      id: 0,
      name: 'Get a course',
      done: false,
      selected: false,
    },
    {
      id: 1,
      name: 'Seek Help',
      done: true,
      selected: false,
    },
    {
      id: 2,
      name: 'Ask A friend',
      done: false,
      selected: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
