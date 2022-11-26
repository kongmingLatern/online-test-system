package com.cle.onlinetestsystem.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author kele
 */
@Data
@TableName("`match`")
public class Match {
  @TableId
  private Long matchId;//考试id
  private Long studentId;//学生id
  private Long taskId;//试卷id
  private Double grade;//成绩
  private Integer isCheat;//是否作弊
  private Integer isStart;//是否开始
  private Integer isEnd;//是否结束
}
