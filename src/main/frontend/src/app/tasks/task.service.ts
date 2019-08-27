import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import { HttpClient } from "@angular/common/http";
import {Task} from './task.model';


@Injectable()
export class TaskService {

    // This works like an event listener so browser is refreshed on adding a new task.
    onTaskAdded = new EventEmitter<Task>();

    // we are using dependency injection into our service
    constructor(private http: HttpClient) {

    }

    getTasks() {
        return this.http.get('/api/tasks');
    }

    saveTask(task: Task, checked: boolean) {
        task.completed = checked;
        // Remember this is a controller method we set up in Spring Boot
        return this.http.post('/api/tasks/save', task);
    }

    addTask(task: Task) {
        return this.http.post('/api/tasks/save', task);
    }
}
