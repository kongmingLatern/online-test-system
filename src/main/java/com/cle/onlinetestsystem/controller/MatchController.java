package com.cle.onlinetestsystem.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cle.onlinetestsystem.Utils.MyUtils;
import com.cle.onlinetestsystem.Utils.RedisUtils;
import com.cle.onlinetestsystem.dto.MatchDto;
import com.cle.onlinetestsystem.dto.QuestionDto;
import com.cle.onlinetestsystem.pojo.*;
import com.cle.onlinetestsystem.service.*;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@AllArgsConstructor
@RequestMapping("/match")
public class MatchController {
    private final StudentService studentService;
    private final SubjectService subjectService;
    private final MatchService matchService;
    private final ClbumService clbumService;
    private final TaskService taskService;
    private final BaseService baseService;
    private final RedisUtils redisUtils;
    /**
     * 分页查询学生成绩
     *
     * @param page
     * @param pageSize
     * @param studentNo
     * @return
     */
    @GetMapping("/getGradePage")
    public R<Page> getGrade(Integer page, Integer pageSize, String studentNo) {
        Page<Match> matchPage = new Page<>(page, pageSize);
        LambdaQueryWrapper<Match> matchLambdaQueryWrapper = new LambdaQueryWrapper<>();
        //没有结束的考试不查询成绩
        matchLambdaQueryWrapper.eq(Match::getIsEnd, 1);
        matchService.page(matchPage, matchLambdaQueryWrapper);
        Page<MatchDto> matchDtoPage = new Page<>();
        BeanUtils.copyProperties(matchPage, matchDtoPage);
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
            if (studentNo == null) {
                return true;
            } else {
                return matchDto.getStudentNo().contains(studentNo);
            }
        }).collect(Collectors.toList());
        matchDtoPage.setRecords(collect);
        return R.success(matchDtoPage);
    }

    /**
     * 分页查询考生密码
     *
     * @param page
     * @param pageSize
     * @param studentNo
     * @return
     */
    @GetMapping("/getMatchPasswordPage")
    public R<Page> getMatchPasswordPage(Integer page, Integer pageSize, String studentNo) {
        Page<Match> matchPage = new Page<>(page, pageSize);
        matchService.page(matchPage);
        Page<MatchDto> matchDtoPage = new Page<>();
        BeanUtils.copyProperties(matchPage, matchDtoPage);
        List<Match> records = matchPage.getRecords();
        List<MatchDto> collect = records.parallelStream().map(match -> {
            MatchDto matchDto = new MatchDto();
            Student student = studentService.getById(match.getStudentId());
            Clbum clbum = clbumService.getById(student.getClassId());
            LambdaQueryWrapper<Task> taskLambdaQueryWrapper = new LambdaQueryWrapper<>();
            taskLambdaQueryWrapper.eq(match.getTaskId() != null, Task::getTaskId, match.getTaskId());
            Task task = taskService.getOne(taskLambdaQueryWrapper);
            LambdaQueryWrapper<Base> baseLambdaQueryWrapper = new LambdaQueryWrapper<>();
            baseLambdaQueryWrapper.eq(task.getTaskId() != null, Base::getBaseId, task.getBaseId());
            Base base = baseService.getOne(baseLambdaQueryWrapper);
            LambdaQueryWrapper<Subject> subjectLambdaQueryWrapper = new LambdaQueryWrapper<>();
            subjectLambdaQueryWrapper.eq(base.getSubjectId() != null, Subject::getSubjectId, base.getSubjectId());
            Subject subject = subjectService.getOne(subjectLambdaQueryWrapper);
            String timeConversion = MyUtils.timeConversion(task.getTaskTime(), task.getLimitTime());
            matchDto.setTaskStartToEnd(timeConversion);
            matchDto.setMatchId(match.getMatchId());
            matchDto.setStudentNo(student.getStudentNo());
            matchDto.setClassNo(clbum.getClassNo());
            matchDto.setStudentName(student.getStudentName());
            matchDto.setSubjectName(subject.getSubjectName());
            matchDto.setTaskPassword(match.getMatchPassword());
             if (match.getIsStart() == 0) {
                matchDto.setStatus("未开考");
            } else if (match.getIsStart() == 1) {
                matchDto.setStatus("考试中");
            }
            if (match.getIsEnd() == 1) {
                matchDto.setStatus("考完了");
            }
            if (match.getIsCheat() == 1) {
                matchDto.setStatus("作弊");
            }
            return matchDto;
        }).filter(matchDto -> {
            if (studentNo == null) {
                return true;
            } else {
                return matchDto.getStudentNo().contains(studentNo);
            }
        })
                .collect(Collectors.toList());
        matchDtoPage.setRecords(collect);
        return R.success(matchDtoPage);
    }

    /**
     * 为班级添加考试
     */
    @PostMapping("/addClassMatch")
    public R<String> addClassMatch(@RequestBody MatchDto matchDto) {
//        log.info(matchDto.toString());
        List<Long> classId = matchDto.getClassIdList();
        classId.parallelStream().forEach(s -> {
            LambdaQueryWrapper<Student> studentLambdaQueryWrapper = new LambdaQueryWrapper<>();
            studentLambdaQueryWrapper.eq(Student::getClassId, s)
                    .select(Student::getStudentId);
            LambdaQueryWrapper<Task> taskLambdaQueryWrapper = new LambdaQueryWrapper<>();
            taskLambdaQueryWrapper.eq(Task::getTaskId,matchDto.getTaskId());
            Task task = taskService.getOne(taskLambdaQueryWrapper);
            taskLambdaQueryWrapper.eq(Task::getTaskId,matchDto.getTaskId());
            List<Student> list = studentService.list(studentLambdaQueryWrapper);
            List<Match> collect = list.parallelStream().map(student -> {
                Match match = new Match();
                match.setIsStart(0);
                match.setTaskId(matchDto.getTaskId());
                match.setIsEnd(0);
                match.setIsCheat(0);
                match.setGrade(0.0);
                match.setMatchPassword(task.getTaskPassword());
                match.setStudentId(student.getStudentId());
                return match;
            }).collect(Collectors.toList());
            matchService.saveBatch(collect);
        });
        return R.success("添加成功");
    }

    /**
     * 开始考试
     * @param matchId
     * @param matchPassword
     * @return
     */
    @GetMapping("/startMatch")
    public R<List<QuestionDto>> startMatch(Long matchId,String matchPassword){
        List<QuestionDto> questionList = matchService.startMatch(matchId,matchPassword);
        return R.success(questionList);
    }

    /**
     * 提供前端每过一段时间保存试卷
     * @param matchDto
     * @return
     */
    @PostMapping("/saveMatch")
    public R<String> saveMatch(@RequestBody MatchDto matchDto){
        matchService.saveMatch(matchDto);
        return R.success("保存成功");
    }

    /**
     * 二次考试进入提取最近保存的试卷
     * @param matchId
     * @param matchPassword
     * @return
     */
    @GetMapping("/getMatch")
    public R<List<QuestionDto>> getMatch(Long matchId,String matchPassword){
        List<QuestionDto> questionDtoList = matchService.getMatch(matchId, matchPassword);
        return R.success(questionDtoList);
    }

    /**
     * 提交试卷
     * @param matchDto
     * @return
     */
    @PostMapping("/submit")
    public R<String> submit(@RequestBody MatchDto matchDto){
        Double grade = matchService.submit(matchDto);
        return R.success("分数为"+grade);
    }

    /**
     * 获取自己的考试
     * @param studentId
     * @return
     */
    @GetMapping("/getSelfMatch")
    public R<List<MatchDto>> getSelfMatch(Long studentId){
        LambdaQueryWrapper<Match> matchLambdaQueryWrapper = new LambdaQueryWrapper<>();
        matchLambdaQueryWrapper.eq(Match::getStudentId,studentId)
                               .eq(Match::getIsEnd,0);
        List<Match> matchList = matchService.list(matchLambdaQueryWrapper);
        List<MatchDto> matchDtoList = matchList.parallelStream().map(match -> {
            MatchDto matchDto = new MatchDto();
            Task task = taskService.getById(match.getTaskId());
            matchDto.setTaskName(task.getTaskName());
            matchDto.setTaskTime(task.getTaskTime());
            matchDto.setLimitTime(task.getLimitTime());
            matchDto.setMatchId(match.getMatchId());
            matchDto.setIsStart(match.getIsStart());
            return matchDto;
        }).collect(Collectors.toList());
        return R.success(matchDtoList);
    }
}
