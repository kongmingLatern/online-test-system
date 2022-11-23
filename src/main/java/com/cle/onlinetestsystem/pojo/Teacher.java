package com.cle.onlinetestsystem.pojo;

import com.alibaba.excel.annotation.ExcelProperty;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Teacher {
  @TableId
  private Long teacherId;
  @ExcelProperty(value = "教工号",index = 0)
  private String teacherNo;
  private String password;
  @ExcelProperty(value = "教师姓名",index = 1)
  private String teacherName;
  private Integer isAuth;
}
