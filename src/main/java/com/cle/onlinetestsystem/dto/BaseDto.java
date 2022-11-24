package com.cle.onlinetestsystem.dto;

import com.cle.onlinetestsystem.pojo.Base;
import lombok.Data;

@Data
public class BaseDto extends Base {
    private String subjectName;//科目名
    private String teacherName;//教师名
}
