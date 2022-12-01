package com.cle.onlinetestsystem.scheduling;

import com.alibaba.fastjson2.JSON;
import com.cle.onlinetestsystem.Utils.RedisUtils;
import com.cle.onlinetestsystem.dto.QuestionDto;
import com.cle.onlinetestsystem.pojo.Match;
import com.cle.onlinetestsystem.pojo.Task;
import com.cle.onlinetestsystem.service.MatchService;
import com.cle.onlinetestsystem.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Component
public class RedisScheduling {
    private static final String MATCH_CACHE = "matchCache";
    @Autowired
    private RedisUtils redisUtils;
    @Autowired
    private MatchService matchService;
    /**
     * 每五分钟检查一次redis中保存的试卷，如果没有提交就自动批改，如果已经提交就清除缓存
     */

    @Autowired
    private TaskService taskService;
    @Scheduled(fixedDelay = 5*60*1000)
    public void computeGradeFromRedis(){
        Set<Long> matchCache = redisUtils.getHashKeys(MATCH_CACHE);
        matchCache.parallelStream().forEach(matchId->{
            Match match = matchService.getById(matchId);
            Task task = taskService.getById(match.getTaskId());
            Object questionDtoList = redisUtils.hmGet(MATCH_CACHE, matchId);
            String jsonString = JSON.toJSONString(questionDtoList);
            List<QuestionDto> questionDtos = JSON.parseArray(jsonString, QuestionDto.class);
            redisUtils.deleteHashValue(MATCH_CACHE,match.getMatchId());
            Double computeGrade = matchService.computeGrade(questionDtos, task);
            match.setGrade(computeGrade);
            match.setIsEnd(1);
            matchService.updateById(match);
        });
    }
}
