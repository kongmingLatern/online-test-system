package com.cle.onlinetestsystem.dto;

import com.cle.onlinetestsystem.pojo.Student;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class StudentDto extends Student {
    String classNo;//班级编号
}
