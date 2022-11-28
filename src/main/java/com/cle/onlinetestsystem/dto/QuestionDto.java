package com.cle.onlinetestsystem.dto;

import com.cle.onlinetestsystem.pojo.Question;
import lombok.Data;

import java.util.List;

@Data
public class QuestionDto extends Question {

    private String baseTitle;//题库名称
    private List<String> questionAnswerList;//答案数组
}
