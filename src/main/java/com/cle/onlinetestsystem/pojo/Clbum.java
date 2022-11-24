package com.cle.onlinetestsystem.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("class")
public class Clbum {
  @TableId
  private Long classId;//班级id
  private String classNo;//班级编号
}
