package com.cle.onlinetestsystem.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cle.onlinetestsystem.dto.TaskDto;
import com.cle.onlinetestsystem.pojo.Task;

public interface TaskService extends IService<Task> {
    void saveTaskWithMatch(TaskDto taskDto);
}
