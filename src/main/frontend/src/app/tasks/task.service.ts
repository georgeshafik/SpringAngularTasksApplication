import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class TaskService {

    // we are using dependency injection into our service
    constructor(private http: HttpClient) {

    }

    getTasks() {
        return this.http.get('/api/tasks');
    }

}
