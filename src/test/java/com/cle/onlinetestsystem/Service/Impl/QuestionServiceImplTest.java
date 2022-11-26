package com.cle.onlinetestsystem.Service.Impl;

import com.cle.onlinetestsystem.pojo.Question;
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
    List<Question> questionList = questionService.chooseQuestion(1595984141143273474L, 10, 5, 3);
    System.out.println(questionList);
}
}