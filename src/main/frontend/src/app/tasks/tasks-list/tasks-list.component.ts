import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = []

    constructor(private taskService: TaskService) { }

    ngOnInit() {
        // this.tasks.push( new Task(1, "Task 1", true, "07/08/17"))
        // this.tasks.push( new Task(2, "Task 2", false, "07/08/17"))
        // this.tasks.push( new Task(3, "Task 3", false, "07/08/17"))

        // call our service
        return this.taskService.getTasks()
            .subscribe(
                (tasks: any[]) => {
                    this.tasks = tasks;
                },
                (error) => console.log(error)
            );
    }

    getDueDateLabel(task: Task){
        return task.completed ? 'label-success' : 'label-primary';
    }

    onTaskChange(event, task) {
        // subscribe executes the service
        this.taskService.saveTask(task,event.target.checked).subscribe();
    }
}
