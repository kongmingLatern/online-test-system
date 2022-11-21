package com.cle.onlinetestsystem.pojo;

import lombok.Data;

@Data
public class Question {

  private Long questionId;
  private Long baseId;
  private Integer questionType;
  private String questionList;
  private String questionAnswer;
  private String questionCorrect;

}
