package net.gsss.tasks.controller;

import net.gsss.tasks.domain.Task;
import net.gsss.tasks.service.TaskService;
import org.springframework.web.bind.annotation.*;

/**
 * Created by gs on 2019-08-27
 */
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    // if we went to localhost:8080 or localhost:8080/
    @GetMapping( value = {"", "/"})
    public Iterable<Task> list() {
        // We need to reach out to our repository through our service.
        return this.taskService.list();
    }

    // Saving a task from the Angular side
    // the complete url will be /api/tasks/save
    // this post request will also require a request body
    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task) {
        return this.taskService.save( task );
    }
}
