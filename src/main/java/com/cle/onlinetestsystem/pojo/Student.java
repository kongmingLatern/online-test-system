package com.cle.onlinetestsystem.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Student {
@TableId
  private Long studentId;//学生id
  private Long classId;//班级id
  private String studentNo;//学生编号
  private String password;//密码
  private String studentName;//学生姓名

}
