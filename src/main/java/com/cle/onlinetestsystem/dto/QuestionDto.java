package com.cle.onlinetestsystem.dto;

import com.cle.onlinetestsystem.pojo.Question;
import lombok.Data;

@Data
public class QuestionDto extends Question {

    private String baseTitle;//题库名称
}
