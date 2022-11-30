package com.cle.onlinetestsystem.dto;

import com.cle.onlinetestsystem.pojo.Match;
import lombok.Data;

import java.util.List;

/**
 * @author kele
 */
@Data
public class MatchDto extends Match {
    private String studentNo;//学生学号
    private String classNo;//班级号
    private String studentName;//学生姓名
    private String subjectName;//科目名字
    private String baseTitle;//题目名称
    private List<Long> classIdList;//班级号
    private Long taskId;//考试号
    private String taskPassword;//
    private String status;//当前考试状态
    private List<QuestionDto> questionDtoList;//试卷集合
    private String taskStartToEnd;//考试开始到结束时间
}
