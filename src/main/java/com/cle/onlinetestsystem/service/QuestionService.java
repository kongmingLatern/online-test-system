package com.cle.onlinetestsystem.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cle.onlinetestsystem.pojo.Question;

import java.util.List;

public interface QuestionService extends IService<Question> {
    public List<Question> chooseQuestion(Long baseId,Integer radioNumber,Integer selectedNumber,Integer judgeNumber);
}
