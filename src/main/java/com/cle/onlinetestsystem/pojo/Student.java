package com.cle.onlinetestsystem.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Student {
@TableId
  private Long studentId;
  private Long classId;
  private String studentNo;
  private String password;
  private String studentName;

}
