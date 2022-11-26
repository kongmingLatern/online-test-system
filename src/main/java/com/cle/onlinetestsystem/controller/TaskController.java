package com.cle.onlinetestsystem.controller;

import com.cle.onlinetestsystem.dto.TaskDto;
import com.cle.onlinetestsystem.pojo.R;
import com.cle.onlinetestsystem.service.QuestionService;
import com.cle.onlinetestsystem.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/task")
public class TaskController {
    private final QuestionService questionService;
    private final TaskService taskService;

    public TaskController(QuestionService questionService, TaskService taskService) {
        this.questionService = questionService;
        this.taskService = taskService;
    }

    @PostMapping("/add")
    public R<String> addTask(@RequestBody TaskDto taskDto){
        if((taskDto.getRadioNumber()*taskDto.getRadioScore()+taskDto.getJudgeNumber()*taskDto.getJudgeScore()+taskDto.getSelectedNumber()*taskDto.getSelectedScore())!=100.0){
            return R.error("试卷分值有误");
        }
        taskService.saveTaskWithMatch(taskDto);
        return R.success("添加成功");
    }
}
