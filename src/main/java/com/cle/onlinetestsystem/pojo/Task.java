package com.cle.onlinetestsystem.pojo;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Task {

  private Long taskId;//考试id
  private Long baseId;//题库id
  private String taskTerm;//考试学期
  private String taskType;//期中期末
  private String taskName;//考试名
  private String taskPassword;//考试密码
  private LocalDateTime taskTime;//考试时间
  private String limitTime;//限制时间
  private Integer radioNumber;//单选数量
  private Double radioScore;//单选分数
  private Integer selectedNumber;//多选数量
  private Double selectedScore;//多选分数
  private Integer judgeNumber;//判断数量
  private Double judgeScore;//判断分数

}
