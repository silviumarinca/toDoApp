import { Component, Input, OnInit } from '@angular/core';
import { ToDoModel } from 'src/app/Model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
 
  @Input() toDoTasks: ToDoModel[];
  taskItem: ToDoModel = new ToDoModel(0,'',false,false);
  addOperationDisabled: boolean = false;
  constructor() {} 
  ngOnInit(): void {}
  private GetTaskIndex(id: number): number {
    let taskIndex = this.toDoTasks.findIndex((c) => c.id == id);
    return taskIndex;
  }

 

  toggleTaskStatus = (id: number) => {
    const affectedTask = this.toDoTasks.find((c) => c.id === id);
    if (affectedTask) {
      affectedTask.done = !affectedTask.done;
    }
  };
  
  selectieTask(id: number){
    const affectedTask = this.toDoTasks.find((c) => c.id === id);
    if(affectedTask){
     this.taskItem= {...affectedTask};
     this.taskItem.selected=true;
    }
    
  }
  unSetTaskItem(){
      this.taskItem=new ToDoModel(0,'',false,false);
  }
  addTask(toDo: ToDoModel) { 
    toDo.id= this.toDoTasks.length+1;

    this.toDoTasks.push({...toDo});
    console.log(this.toDoTasks);
    this.unSetTaskItem();
  }
  modifyTask(task: ToDoModel) {
    const taskIndex: number = this.GetTaskIndex(task.id);
    task.selected=false;
    if (taskIndex > -1) this.toDoTasks.splice(taskIndex, 1, {...task});
    this.unSetTaskItem();
  }
  removeTask(taskId: number) {
    const taskIndex: number = this.GetTaskIndex(taskId);
    if (taskIndex > -1) this.toDoTasks.splice(taskIndex, 1);
    this.unSetTaskItem();
  }
}