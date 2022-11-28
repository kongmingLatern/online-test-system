package com.cle.onlinetestsystem.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cle.onlinetestsystem.dao.TaskDao;
import com.cle.onlinetestsystem.pojo.Task;
import com.cle.onlinetestsystem.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TaskServiceImpl extends ServiceImpl<TaskDao, Task> implements TaskService {



//    @Override
//    @Transactional(rollbackFor = Exception.class)
//    public void saveTaskWithMatch(TaskDto taskDto) {
//          this.save(taskDto);
//        LambdaQueryWrapper<Student> studentLambdaQueryWrapper = new LambdaQueryWrapper<>();
//        studentLambdaQueryWrapper.eq(Student::getClassId,taskDto.getClassId());
//        List<Student> studentList = studentService.list(studentLambdaQueryWrapper);
//        studentList.stream().forEach(student -> {
//            Match match = new Match();
//            match.setGrade(0.0);
//            match.setIsCheat(0);
//            match.setIsEnd(0);
//            match.setIsStart(0);
//            match.setTaskId(taskDto.getTaskId());
//            match.setStudentId(student.getStudentId());
//            matchService.save(match);
//        });
//    }
}
