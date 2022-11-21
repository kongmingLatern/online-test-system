package com.cle.onlinetestsystem.pojo;

import lombok.Data;

@Data
public class Match {

  private Long matchId;
  private Long studentId;
  private Long taskId;
  private Double grade;
  private Long isCheat;
  private Long isStart;
}
