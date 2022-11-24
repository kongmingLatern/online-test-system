package com.cle.onlinetestsystem.pojo;

import com.alibaba.excel.annotation.ExcelProperty;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Teacher {
  @TableId
  private Long teacherId;//教师id
  @ExcelProperty(value = "教工号",index = 0)
  private String teacherNo;//教工号
  private String password;//密码
  @ExcelProperty(value = "教师姓名",index = 1)
  private String teacherName;//教师姓名
  private Integer isAuth;//是否管理
}
