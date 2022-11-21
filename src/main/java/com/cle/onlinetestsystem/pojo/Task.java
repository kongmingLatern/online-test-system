package com.cle.onlinetestsystem.pojo;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Task {

  private Long taskId;
  private Long baseId;
  private String taskTerm;
  private String taskType;
  private String taskName;
  private String taskPassword;
  private LocalDateTime taskTime;
  private String limitTime;
  private Integer radioNumber;
  private Double radioScore;
  private Integer selectedNumber;
  private Double selectedScore;
  private Integer judgeNumber;
  private Double judgeScore;

}
