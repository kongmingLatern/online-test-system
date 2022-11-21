package com.cle.onlinetestsystem.pojo;

import lombok.Data;

@Data
public class Teacher {

  private Long teacherId;
  private Long subjectId;
  private String teacherNo;
  private String password;
  private String teacherName;
  private Integer isAuth;


}
