package com.cle.onlinetestsystem.dto;

import com.cle.onlinetestsystem.pojo.Question;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class QuestionDto extends Question implements Serializable {

    private String baseTitle;//题库名称
    private List<String> questionAnswerList;//答案数组
    private List<String> questionCorrectList;//正确答案数组
}