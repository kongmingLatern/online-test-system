package com.cle.onlinetestsystem.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cle.onlinetestsystem.Utils.MyUtils;
import com.cle.onlinetestsystem.Utils.RedisUtils;
import com.cle.onlinetestsystem.Utils.ValidateCodeUtils;
import com.cle.onlinetestsystem.common.CustomException;
import com.cle.onlinetestsystem.dao.MatchDao;
import com.cle.onlinetestsystem.dto.MatchDto;
import com.cle.onlinetestsystem.dto.QuestionDto;
import com.cle.onlinetestsystem.pojo.Match;
import com.cle.onlinetestsystem.pojo.Question;
import com.cle.onlinetestsystem.pojo.Task;
import com.cle.onlinetestsystem.service.MatchService;
import com.cle.onlinetestsystem.service.QuestionService;
import com.cle.onlinetestsystem.service.TaskService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicReference;
import java.util.function.Function;
import java.util.stream.Collectors;

@Slf4j
@Service
@AllArgsConstructor
public class MatchServiceImpl extends ServiceImpl<MatchDao, Match> implements MatchService {
    private final QuestionService questionService;
    private final TaskService taskService;
    private final RedisUtils redisUtils;

    /**
     * 开始考试
     * @param matchId
     * @param matchPassword
     * @return
     */
    @Override
    public List<QuestionDto> startMatch(Long matchId, String matchPassword) {
        Match match = this.getById(matchId);
        if(!matchPassword.equals(match.getMatchPassword()))
        {
            throw new CustomException("密码错误");
        }
        if(match.getIsCheat()==1){
            throw new CustomException("该考试作弊，不可开考");
        }
        if(match.getIsStart()==1&&match.getIsEnd()==0){
            throw new CustomException("已经开考了");
        }
        if(match.getIsEnd()==1){
            throw new CustomException("已经考过了");
        }
        Task task = taskService.getById(match.getTaskId());
        //随机出题目
        List<QuestionDto> questionList = questionService.chooseQuestion(task.getBaseId(), task.getRadioNumber(), task.getSelectedNumber(), task.getJudgeNumber());
        //设置开考和二次密码
        match.setIsStart(1);
        match.setMatchPassword(String.valueOf(ValidateCodeUtils.generateValidateCode(4)));
        this.updateById(match);
        return questionList;
    }

    /**
     * 保存试卷☞redis
     * @param matchDto
     */
    @Override

    public void saveMatch(MatchDto matchDto) {
        log.info(String.valueOf(matchDto));
        //存入缓存
        redisUtils.hmSet("matchCache",matchDto.getMatchId(),matchDto.getQuestionDtoList());
    }

    /**
     * redis获取试卷
     * @param matchId
     * @param matchPassword
     * @return
     */
    @Override
    public List<QuestionDto> getMatch(Long matchId, String matchPassword) {
        Match match = this.getById(matchId);
        if (!matchPassword.equals(match.getMatchPassword())){
            throw new CustomException("密码错误");
        }
        match.setMatchPassword(ValidateCodeUtils.generateValidateCode(4).toString());
        this.updateById(match);
        List<QuestionDto> matchCache = (List<QuestionDto>) redisUtils.hmGet("matchCache", matchId);
        return matchCache;
    }



    /**
     * 计算分数
     * @param questionDtoList
     * @return
     */
    @Override
    public Double computeGrade(List<QuestionDto> questionDtoList,Task task){
        AtomicReference<Double> grade = new AtomicReference<>(0.0);
        questionDtoList.parallelStream().forEach(questionDto -> {
            Question question = questionService.getById(questionDto.getQuestionId());
            String questionCorrect = question.getQuestionCorrect();
            List<String> questionCorrectList = questionDto.getQuestionCorrectList();//用户选项集合
            //默认为错误
            Boolean flag = false;
            //如果没填就是错误
            if(questionCorrectList!=null) {
                //转为list判断是否一致
                List<String> split = MyUtils.stringConversionList(questionCorrect);//正确答案集合
                if(split.size()==questionCorrectList.size()) {//如果选的和正确答案长度相同
                    List<String> stringList = intersectList2(split, questionCorrectList);
                    flag = split.size() == stringList.size();
                }
            }
            if(flag){
                if(question.getQuestionType().equals(1)){
                    grade.updateAndGet(v -> v + task.getJudgeScore());
                }
                else if(question.getQuestionType().equals(2)){
                    grade.updateAndGet(v -> v + task.getSelectedScore());
                }
                else {
                    grade.updateAndGet(v -> v + task.getJudgeScore());
                }
            }
        });
        return grade.get();
    }


    /**
     * 提交试卷
     * @param matchDto
     * @return
     */
    @Override
    public Double submit(MatchDto matchDto) {
        Match match = this.getById(matchDto.getMatchId());
        if(match.getIsEnd()==1){
            throw new CustomException("不可重复提交");
        }
        Task task = taskService.getById(match.getTaskId());
        List<QuestionDto> questionDtoList = matchDto.getQuestionDtoList();
        Double computeGrade = computeGrade(questionDtoList, task);
        matchDto.setGrade(computeGrade);
        matchDto.setIsEnd(1);
        this.updateById(matchDto);
        return computeGrade;
    }

    /**
     * 求两个集合的交集
     * @param list1
     * @param list2
     * @return
     */
    public List<String> intersectList2(List<String> list1, List<String> list2) {
        Map<String, String> tempMap = list2.parallelStream().collect(Collectors.toMap(Function.identity(), Function.identity(), (oldData, newData) -> newData));
        return list1.parallelStream().filter(str -> tempMap.containsKey(str)).collect(Collectors.toList());
    }

}
