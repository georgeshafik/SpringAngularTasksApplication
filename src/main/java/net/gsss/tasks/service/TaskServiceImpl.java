package net.gsss.tasks.service;

import net.gsss.tasks.domain.Task;
import net.gsss.tasks.repository.TaskRepository;

/**
 * Created by gs on 2019-08-27
 */
public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;

    // Because we are using Spring 4.3+ we do not need the @Autowire annotation here!
    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // to implement this we need to go out to our repository
    @Override
    public Iterable<Task> list() {
        return this.taskRepository.findAll();
    }
}
