package com.cle.onlinetestsystem.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Subject {
@TableId
  private Long subjectId;//科目id
  private Long teacherId;//教师id
  private String subjectName;//科目名称


}
