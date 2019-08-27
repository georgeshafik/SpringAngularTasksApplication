package net.gsss.tasks.service;

import net.gsss.tasks.domain.Task;

public interface TaskService {

    Iterable<Task> list();
}
