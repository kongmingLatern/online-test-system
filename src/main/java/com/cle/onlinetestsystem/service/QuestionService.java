package com.cle.onlinetestsystem.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cle.onlinetestsystem.dto.QuestionDto;
import com.cle.onlinetestsystem.pojo.Question;

import java.util.List;

public interface QuestionService extends IService<Question> {
    public List<QuestionDto> chooseQuestion(Long baseId, Integer radioNumber, Integer selectedNumber, Integer judgeNumber);
}
