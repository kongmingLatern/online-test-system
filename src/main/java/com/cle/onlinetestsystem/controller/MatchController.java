package com.cle.onlinetestsystem.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cle.onlinetestsystem.dto.MatchDto;
import com.cle.onlinetestsystem.pojo.*;
import com.cle.onlinetestsystem.service.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;
@Slf4j
@RestController
@RequestMapping("/match")
public class MatchController {
    private final StudentService studentService;
    private final SubjectService subjectService;
    private final MatchService matchService;
    private final ClbumService clbumService;
    private final TaskService taskService;
    private final BaseService baseService;
    public MatchController(StudentService studentService, SubjectService subjectService, MatchService matchService, ClbumService clbumService, TaskService taskService, BaseService baseService) {
        this.studentService = studentService;
        this.subjectService = subjectService;
        this.matchService = matchService;
        this.clbumService = clbumService;
        this.taskService = taskService;
        this.baseService = baseService;
    }

    /**
     * 分页查询学生成绩
     * @param page
     * @param pageSize
     * @param studentNo
     * @return
     */
    @GetMapping("/getGradePage")
    public R<Page> getGrade(Integer page, Integer pageSize, String studentNo){
    Page<Match> matchPage = new Page<>(page,pageSize);
        LambdaQueryWrapper<Match> matchLambdaQueryWrapper = new LambdaQueryWrapper<>();
        //没有结束的考试不查询成绩
        matchLambdaQueryWrapper.eq(Match::getIsEnd,1);
    matchService.page(matchPage,matchLambdaQueryWrapper);
    Page<MatchDto> matchDtoPage = new Page<>();
    BeanUtils.copyProperties(matchPage,matchDtoPage);
        List<Match> records = matchPage.getRecords();
        List<MatchDto> collect = records.parallelStream().map(match -> {
            MatchDto matchDto = new MatchDto();
            LambdaQueryWrapper<Student> studentLambdaQueryWrapper = new LambdaQueryWrapper<>();
            studentLambdaQueryWrapper.eq(match.getStudentId() != null, Student::getStudentId, match.getStudentId());
            Student student = studentService.getOne(studentLambdaQueryWrapper);
            LambdaQueryWrapper<Clbum> clbumLambdaQueryWrapper = new LambdaQueryWrapper<>();
            clbumLambdaQueryWrapper.eq(student.getClassId() != null, Clbum::getClassId, student.getClassId());
            Clbum clbum = clbumService.getOne(clbumLambdaQueryWrapper);
            LambdaQueryWrapper<Task> taskLambdaQueryWrapper = new LambdaQueryWrapper<>();
            taskLambdaQueryWrapper.eq(match.getTaskId() != null, Task::getTaskId, match.getTaskId());
            Task task = taskService.getOne(taskLambdaQueryWrapper);
            LambdaQueryWrapper<Base> baseLambdaQueryWrapper = new LambdaQueryWrapper<>();
            baseLambdaQueryWrapper.eq(task.getTaskId() != null, Base::getBaseId, task.getBaseId());
            Base base = baseService.getOne(baseLambdaQueryWrapper);
            LambdaQueryWrapper<Subject> subjectLambdaQueryWrapper = new LambdaQueryWrapper<>();
            subjectLambdaQueryWrapper.eq(base.getSubjectId() != null, Subject::getSubjectId, base.getSubjectId());
            Subject subject = subjectService.getOne(subjectLambdaQueryWrapper);
            matchDto.setMatchId(match.getMatchId());
            matchDto.setStudentNo(student.getStudentNo());
            matchDto.setClassNo(clbum.getClassNo());
            matchDto.setStudentName(student.getStudentName());
            matchDto.setSubjectName(subject.getSubjectName());
            matchDto.setBaseTitle(base.getBaseTitle());
            matchDto.setGrade(match.getGrade());
            return matchDto;
        }).filter(matchDto -> {
            if(studentNo==null){
                return true;
            }
            else {
                return matchDto.getStudentNo().contains(studentNo);
            }
        }).collect(Collectors.toList());
        matchDtoPage.setRecords(collect);
        return R.success(matchDtoPage);
    }
}
