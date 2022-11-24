package com.cle.onlinetestsystem.pojo;

import lombok.Data;

@Data
public class Match {

  private Long matchId;//考试id
  private Long studentId;//学生id
  private Long taskId;//考试id
  private Double grade;//成绩
  private Long isCheat;//是否作弊
  private Long isStart;//是否开始
}
