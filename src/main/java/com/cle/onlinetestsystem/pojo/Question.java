package com.cle.onlinetestsystem.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Question {
@TableId
  private Long questionId;//题目id
  private Long baseId;//题库id
  private Integer questionType;//题目类型
  private String questionList;//题目
  private String questionAnswer;//题目选项
  private String questionCorrect;//题目正确答案

}
