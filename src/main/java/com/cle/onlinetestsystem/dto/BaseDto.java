package com.cle.onlinetestsystem.dto;

import com.cle.onlinetestsystem.pojo.Base;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BaseDto extends Base {
    private String subjectName;//科目名
    private String teacherName;//教师名
}
