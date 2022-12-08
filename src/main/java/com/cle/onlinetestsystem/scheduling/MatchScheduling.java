package com.cle.onlinetestsystem.scheduling;

import com.alibaba.fastjson2.JSON;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.cle.onlinetestsystem.Utils.RedisUtils;
import com.cle.onlinetestsystem.dto.QuestionDto;
import com.cle.onlinetestsystem.pojo.Match;
import com.cle.onlinetestsystem.pojo.Task;
import com.cle.onlinetestsystem.service.MatchService;
import com.cle.onlinetestsystem.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Component
public class MatchScheduling {
    private static final String MATCH_CACHE = "matchCache";
    @Autowired
    private RedisUtils redisUtils;
    @Autowired
    private MatchService matchService;
    @Autowired
    private TaskService taskService;
    /**
     * 每五分钟检查一次redis中保存的试卷，如果没有提交就自动批改，如果已经提交就清除缓存
     */
    @Scheduled(fixedDelay = 5*60*1000)
    public void computeGradeFromRedis(){
        Set<Long> matchCache = redisUtils.getHashKeys(MATCH_CACHE);
        matchCache.parallelStream().forEach(matchId->{
            Match match = matchService.getById(matchId);
            if(match.getIsEnd()==0) {
                Task task = taskService.getById(match.getTaskId());
                if (task.getTaskTime().plusMinutes(task.getLimitTime()).isBefore(LocalDateTime.now())) {
                    //redis中获取所有试卷
                    Object questionDtoList = redisUtils.hmGet(MATCH_CACHE, matchId);
                    String jsonString = JSON.toJSONString(questionDtoList);
                    List<QuestionDto> questionDtos = JSON.parseArray(jsonString, QuestionDto.class);
                    //清除缓存
                    redisUtils.deleteHashValue(MATCH_CACHE, match.getMatchId());
                    Double computeGrade = matchService.computeGrade(questionDtos, task);
                    match.setGrade(computeGrade);
                    match.setIsEnd(1);
                    matchService.updateById(match);
                }
            }
        });
    }

    /**
     * 每天0点查询有无未考的考试，有就设置为已考
     */
    @Scheduled(cron ="0 0 0 * * ?")
//    @Scheduled(fixedDelay = 1000)
    public void notExam(){
        List<Task> taskList = taskService.list();
        taskList.parallelStream().forEach(task -> {
            task.getTaskTime().plusMinutes(task.getLimitTime()).isBefore(LocalDateTime.now());
            LambdaQueryWrapper<Match> matchLambdaQueryWrapper = new LambdaQueryWrapper<>();
            matchLambdaQueryWrapper.eq(Match::getTaskId,task.getTaskId());
            List<Match> matchList = matchService.list(matchLambdaQueryWrapper);
            matchList.parallelStream().forEach(match -> {
                match.setIsEnd(1);
                matchService.updateById(match);
            });
        });
    }



}
