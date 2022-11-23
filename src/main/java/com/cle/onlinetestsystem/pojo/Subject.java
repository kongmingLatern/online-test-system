package com.cle.onlinetestsystem.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Subject {
@TableId
  private Long subjectId;
  private Long teacherId;
  private String subjectName;


}
