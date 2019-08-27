package net.gsss.tasks.controller;

import net.gsss.tasks.domain.Task;
import net.gsss.tasks.service.TaskService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
