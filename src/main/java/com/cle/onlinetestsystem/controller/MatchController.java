package com.cle.onlinetestsystem.controller;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cle.onlinetestsystem.Utils.MyUtils;
import com.cle.onlinetestsystem.common.BaseContext;
import com.cle.onlinetestsystem.dto.MatchDto;
import com.cle.onlinetestsystem.dto.QuestionDto;
import com.cle.onlinetestsystem.pojo.*;
import com.cle.onlinetestsystem.service.*;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
        Task task = taskService.getById(matchDto.getTaskId());
        if(task.getTaskTime().plusMinutes(task.getLimitTime()).isBefore(LocalDateTime.now())){
            return R.error("考试过期，不能分配");
        }
        List<Long> classId = matchDto.getClassIdList();
        classId.parallelStream().forEach(s -> {
            LambdaQueryWrapper<Student> studentLambdaQueryWrapper = new LambdaQueryWrapper<>();
            studentLambdaQueryWrapper.eq(Student::getClassId, s)
                    .select(Student::getStudentId);
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
        Match match = matchService.getById(matchId);
        Task task = taskService.getById(match.getTaskId());
        if(!match.getStudentId().equals(BaseContext.getCurrentId())){
            return R.error("该考试不是你的考试");
        }
        if(task.getTaskTime().plusMinutes(task.getLimitTime()).isAfter(LocalDateTime.now())){
            return R.error("考试还没开始。");
        }
        List<QuestionDto> questionList = matchService.startMatch(matchId,matchPassword);
        // 获取完立刻存入redis
        MatchDto matchDto = new MatchDto();
        matchDto.setQuestionDtoList(questionList);
        matchDto.setMatchId(matchId);
        matchService.saveMatch(matchDto);
        //获取每个题目的数量
        Map<String,Integer> questionCount = new HashMap<>();
        questionCount.put("radio",task.getRadioNumber());
        questionCount.put("selected",task.getSelectedNumber());
        questionCount.put("judge",task.getJudgeNumber());
        return R.success(questionList).add("questionCount",questionCount);
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
        Match match = matchService.getById(matchId);
        if(!match.getStudentId().equals(BaseContext.getCurrentId())){
            return R.error("该考试不是你的考试");
        }
        List<QuestionDto> questionDtoList = matchService.getMatch(matchId, matchPassword);
        Map<String,Integer> questionCount = new HashMap<>();
        Task task = taskService.getById(match.getTaskId());
        questionCount.put("radio",task.getRadioNumber());
        questionCount.put("selected",task.getSelectedNumber());
        questionCount.put("judge",task.getJudgeNumber());
        return R.success(questionDtoList).add("questionCount",questionCount);

    }

    /**
     * 提交试卷
     * @param matchDto
     * @return
     */
    @PostMapping("/submit")
    public R<Double> submit(@RequestBody MatchDto matchDto){
        Double grade = matchService.submit(matchDto);
        return R.success(grade);
    }

    /**
     * 获取自己的考试
     * @param
     * @return
     */
    @GetMapping("/getSelfMatch")
    public R<List<MatchDto>> getSelfMatch(){
        LambdaQueryWrapper<Match> matchLambdaQueryWrapper = new LambdaQueryWrapper<>();
        matchLambdaQueryWrapper.eq(Match::getStudentId,BaseContext.getCurrentId())
                               .eq(Match::getIsEnd,0);
        List<Match> matchList = matchService.list(matchLambdaQueryWrapper);
        List<MatchDto> matchDtoList = matchList.parallelStream().map(match -> {
            MatchDto matchDto = new MatchDto();
            Task task = taskService.getById(match.getTaskId());
            matchDto.setTaskName(task.getTaskName());
            matchDto.setTaskTime(task.getTaskTime());
            matchDto.setLimitTime(Math.toIntExact(MyUtils.getBetweenTime(LocalDateTime.now(), task.getTaskTime().plusMinutes(task.getLimitTime())).toMinutes() >= task.getLimitTime() ? task.getLimitTime() : MyUtils.getBetweenTime(LocalDateTime.now(), task.getTaskTime().plusMinutes(task.getLimitTime())).toMinutes()));
            matchDto.setMatchId(match.getMatchId());
            matchDto.setIsStart(match.getIsStart());
            matchDto.setTaskStartToEnd(MyUtils.timeConversion(task.getTaskTime(),task.getLimitTime()));
            return matchDto;
        })
                .filter(matchDto -> matchDto.getLimitTime()>0)
                .collect(Collectors.toList());
        return R.success(matchDtoList);
    }

    /**
     * 获取自己考完试的成绩
     * @param
     * @return
     */

    @GetMapping("/getSelfGrade")
    public R<List<MatchDto>> getSelfGrade(){
        LambdaQueryWrapper<Match> matchLambdaQueryWrapper = new LambdaQueryWrapper<>();
        matchLambdaQueryWrapper.eq(Match::getStudentId, BaseContext.getCurrentId())
                               .eq(Match::getIsEnd,1);
        List<Match> matchList = matchService.list(matchLambdaQueryWrapper);
        List<MatchDto> collect = matchList.parallelStream().map(match -> {
            MatchDto matchDto = new MatchDto();
            Task task = taskService.getById(match.getTaskId());
            Base base = baseService.getById(task.getBaseId());
            Subject subject = subjectService.getById(base.getSubjectId());
            matchDto.setMatchId(match.getMatchId());
            matchDto.setGrade(match.getGrade());
            matchDto.setTaskStartToEnd(MyUtils.timeConversion(task.getTaskTime(), task.getLimitTime()));
            matchDto.setSubjectName(subject.getSubjectName());
            matchDto.setTaskName(task.getTaskName());
            return matchDto;
        }).collect(Collectors.toList());
        return R.success(collect);
    }

}
