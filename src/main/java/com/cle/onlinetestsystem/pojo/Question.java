package com.cle.onlinetestsystem.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Question {
@TableId
  private Long questionId;
  private Long baseId;
  private Integer questionType;
  private String questionList;
  private String questionAnswer;
  private String questionCorrect;

}
