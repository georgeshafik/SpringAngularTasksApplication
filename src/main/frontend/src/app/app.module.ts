import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TasksAddComponent } from './tasks/tasks-add/tasks-add.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskService } from "./tasks/task.service";
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        AppComponent,
        TasksComponent,
        TasksAddComponent,
        TasksListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [TaskService, HttpClientModule, HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule { }
