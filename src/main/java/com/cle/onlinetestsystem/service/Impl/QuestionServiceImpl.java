package com.cle.onlinetestsystem.service.Impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cle.onlinetestsystem.Utils.MyRandom;
import com.cle.onlinetestsystem.common.CustomException;
import com.cle.onlinetestsystem.dao.QuestionDao;
import com.cle.onlinetestsystem.pojo.Question;
import com.cle.onlinetestsystem.service.QuestionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author kele
 */
@Service
@Slf4j
public class QuestionServiceImpl extends ServiceImpl<QuestionDao, Question> implements QuestionService {
    /**
     * 抽取相应题目
     * @param baseId
     * @param radioNumber
     * @param selectedNumber
     * @param judgeNumber
     * @return
     */
    @Override
//    @Cacheable(value = "questionCache",key = "#baseId")
    public List<Question> chooseQuestion(Long baseId,Integer radioNumber, Integer selectedNumber, Integer judgeNumber) {
        //查询所有的所有题目
        LambdaQueryWrapper<Question> questionLambdaQueryWrapper = new LambdaQueryWrapper<>();
        questionLambdaQueryWrapper.eq(Question::getBaseId,baseId)
                                  .eq(Question::getQuestionType,1);
        List<Question> radioList = this.list(questionLambdaQueryWrapper);
        questionLambdaQueryWrapper=new LambdaQueryWrapper<>();
        questionLambdaQueryWrapper.eq(Question::getBaseId,baseId)
                                  .eq(Question::getQuestionType,2);
        List<Question> selectedList = this.list(questionLambdaQueryWrapper);
        questionLambdaQueryWrapper=new LambdaQueryWrapper<>();
        questionLambdaQueryWrapper.eq(Question::getBaseId,baseId)
                                  .eq(Question::getQuestionType,3);
        List<Question> judgeList = this.list(questionLambdaQueryWrapper);
        if(radioList.size()<radioNumber) {
            throw new CustomException("单选题个数不足");
        }
        if(selectedList.size()<selectedNumber) {
            throw new CustomException("多选题个数不足");
        }
        if(judgeList.size()<judgeNumber) {
            throw new CustomException("判断题个数不足");
        }
        //获取三项随机题目
        Set<Integer> radioSet = MyRandom.generateRandomArray( radioList.size(),radioNumber);
        Set<Integer> selectedSet = MyRandom.generateRandomArray(selectedList.size(),selectedNumber);
        Set<Integer> judgeSet = MyRandom.generateRandomArray(judgeList.size(),judgeNumber);
        List<Question> radioCollect = radioSet.stream().map(integer -> radioList.get(integer)).collect(Collectors.toList());
        List<Question> selectedCollect = selectedSet.stream().map(integer -> selectedList.get(integer)).collect(Collectors.toList());
        List<Question> judgeCollect = judgeSet.stream().map(integer -> judgeList.get(integer)).collect(Collectors.toList());
        radioCollect.forEach(item-> System.out.println(item));
        selectedCollect.forEach(item-> System.out.println(item));
        judgeCollect.forEach(item-> System.out.println(item));
        radioList.addAll(selectedCollect);
        List<Question> questionList = new ArrayList<>();
        questionList.addAll(radioCollect);
        questionList.addAll(selectedCollect);
        questionList.addAll(judgeCollect);
        return questionList;
    }
}

