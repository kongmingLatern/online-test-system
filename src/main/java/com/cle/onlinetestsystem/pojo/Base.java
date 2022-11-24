package com.cle.onlinetestsystem.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Base {
  @TableId
  private Long baseId;//题库id
  private Long subjectId;//科目id
  private String baseTitle;//题库名称
  private Long createUser;//创建者
}
