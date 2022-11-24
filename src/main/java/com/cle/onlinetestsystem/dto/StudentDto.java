package com.cle.onlinetestsystem.dto;

import com.cle.onlinetestsystem.pojo.Student;
import lombok.Data;

@Data
public class StudentDto extends Student {
    String classNo;//班级编号
}
