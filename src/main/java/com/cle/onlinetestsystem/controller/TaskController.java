package com.cle.onlinetestsystem.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cle.onlinetestsystem.Utils.ValidateCodeUtils;
import com.cle.onlinetestsystem.dto.TaskDto;
import com.cle.onlinetestsystem.pojo.Match;
import com.cle.onlinetestsystem.pojo.R;
import com.cle.onlinetestsystem.pojo.Task;
import com.cle.onlinetestsystem.service.MatchService;
import com.cle.onlinetestsystem.service.QuestionService;
import com.cle.onlinetestsystem.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("/task")
public class TaskController {
    private final QuestionService questionService;
    private final TaskService taskService;
    private final MatchService matchService;


    @PostMapping("/add")
    public R<String> addTask(@RequestBody TaskDto taskDto){
        if((taskDto.getRadioNumber()*taskDto.getRadioScore()+taskDto.getJudgeNumber()*taskDto.getJudgeScore()+taskDto.getSelectedNumber()*taskDto.getSelectedScore())!=100.0){
            return R.error("试卷分值有误");
        }
        taskDto.setTaskPassword(ValidateCodeUtils.generateValidateCode(4).toString());
        taskService.save(taskDto);
        return R.success("添加成功");
    }
    @GetMapping("/getAll")
    public R<Page<TaskDto>> getAll(Integer page, Integer pageSize, String taskName)
    {
        Page<Task> taskPage = new Page<>(page,pageSize);
        taskService.page(taskPage);
        Page<TaskDto> taskDtoPage = new Page<>();
        BeanUtils.copyProperties(taskPage,taskDtoPage);
        List<Task> records = taskPage.getRecords();
        List<TaskDto> collect = records.parallelStream().map(task -> {
            TaskDto taskDto = new TaskDto();
            taskDto.setTaskName(task.getTaskName());
            taskDto.setTaskId(task.getTaskId());
            //统计该试卷的考试人数
            LambdaQueryWrapper<Match> mathLambdaQueryWrapper = new LambdaQueryWrapper<>();
            mathLambdaQueryWrapper.eq(Match::getTaskId, task.getTaskId());
            long count = matchService.count(mathLambdaQueryWrapper);
            taskDto.setTaskPeople((int) count);
            taskDto.setTaskType(task.getTaskType());
            //处理格式化时间
            LocalDateTime taskTime = task.getTaskTime();
            Integer limitTime = task.getLimitTime();
            LocalDateTime dateTime = taskTime.plusMinutes(limitTime);
            LocalTime localTime = LocalTime.of(dateTime.getHour(), dateTime.getMinute());
            String taskTimeFormat = DateTimeFormatter.ofPattern("yyyy年MM月dd日 HH:mm").format(taskTime);
            String localTimeFormat = DateTimeFormatter.ofPattern("HH:mm").format(localTime);
            taskDto.setTaskStartToEnd(taskTimeFormat + "-" + localTimeFormat);
            taskDto.setLimitTime(limitTime);
            return taskDto;
        }).filter(taskDto -> {
            if(taskName==null) {
                return true;
            }
            else {
                return taskDto.getTaskName().contains(taskName);
            }
        }
    ).collect(Collectors.toList());
        taskDtoPage.setRecords(collect);
        return R.success(taskDtoPage);
    }

}
