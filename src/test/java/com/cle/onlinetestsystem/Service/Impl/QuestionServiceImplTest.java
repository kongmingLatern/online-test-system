package com.cle.onlinetestsystem.Service.Impl;

import com.cle.onlinetestsystem.dto.QuestionDto;
import com.cle.onlinetestsystem.service.QuestionService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
@SpringBootTest
class QuestionServiceImplTest {
    @Autowired
    private QuestionService questionService;
@Test
    public void test(){
    List<QuestionDto> questionList = questionService.chooseQuestion(1600318902192095233L, 20, 10, 20);
    System.out.println(questionList);
}
}