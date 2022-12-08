package com.cle.onlinetestsystem.Service.Impl;

import com.cle.onlinetestsystem.service.QuestionService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
@SpringBootTest
class QuestionServiceImplTest {
    @Autowired
    private QuestionService questionService;
@Test
    public void test(){
    LocalDateTime dateTime = LocalDateTime.of(2022, 12, 7, 21, 06);
    System.out.println(dateTime.plusMinutes(120).isAfter(LocalDateTime.now()));
}
}