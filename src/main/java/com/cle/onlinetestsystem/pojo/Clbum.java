package com.cle.onlinetestsystem.pojo;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("class")
public class Clbum {
  private Long classId;
  private String classNo;
}
