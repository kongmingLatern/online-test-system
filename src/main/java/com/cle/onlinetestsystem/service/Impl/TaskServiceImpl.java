package com.cle.onlinetestsystem.service.Impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cle.onlinetestsystem.dao.TaskDao;
import com.cle.onlinetestsystem.dto.TaskDto;
import com.cle.onlinetestsystem.pojo.Match;
import com.cle.onlinetestsystem.pojo.Student;
import com.cle.onlinetestsystem.pojo.Task;
import com.cle.onlinetestsystem.service.MatchService;
import com.cle.onlinetestsystem.service.StudentService;
import com.cle.onlinetestsystem.service.TaskService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TaskServiceImpl extends ServiceImpl<TaskDao, Task> implements TaskService {
    private final StudentService studentService;
    private final MatchService matchService;

    public TaskServiceImpl(StudentService studentService, MatchService matchService) {
        this.studentService = studentService;
        this.matchService = matchService;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void saveTaskWithMatch(TaskDto taskDto) {

        LambdaQueryWrapper<Student> studentLambdaQueryWrapper = new LambdaQueryWrapper<>();
        studentLambdaQueryWrapper.eq(Student::getClassId,taskDto.getClassId());
        List<Student> studentList = studentService.list(studentLambdaQueryWrapper);
        studentList.stream().forEach(student -> {
            Match match = new Match();
            match.setGrade(0.0);
            match.setIsCheat(0);
            match.setIsEnd(0);
            match.setIsStart(0);
            match.setTaskId(taskDto.getTaskId());
            match.setStudentId(student.getStudentId());
            matchService.save(match);
        });
    }
}
