package com.cle.onlinetestsystem.dto;

import com.cle.onlinetestsystem.pojo.Match;
import lombok.Data;

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
}
