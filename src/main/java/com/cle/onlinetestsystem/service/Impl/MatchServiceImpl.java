package com.cle.onlinetestsystem.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cle.onlinetestsystem.Utils.ValidateCodeUtils;
import com.cle.onlinetestsystem.common.CustomException;
import com.cle.onlinetestsystem.dao.MatchDao;
import com.cle.onlinetestsystem.dto.QuestionDto;
import com.cle.onlinetestsystem.pojo.Match;
import com.cle.onlinetestsystem.pojo.Task;
import com.cle.onlinetestsystem.service.MatchService;
import com.cle.onlinetestsystem.service.QuestionService;
import com.cle.onlinetestsystem.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MatchServiceImpl extends ServiceImpl<MatchDao, Match> implements MatchService {
    private final QuestionService questionService;
    private final TaskService taskService;
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
}
