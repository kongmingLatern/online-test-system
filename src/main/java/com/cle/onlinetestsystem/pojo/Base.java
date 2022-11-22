package com.cle.onlinetestsystem.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Base {
  @TableId
  private Long baseId;
  private Long subjectId;
  private String baseTitle;
  private Long createUser;
}
