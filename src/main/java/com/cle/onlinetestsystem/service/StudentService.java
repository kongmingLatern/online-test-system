package com.cle.onlinetestsystem.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cle.onlinetestsystem.dto.StudentDto;
import com.cle.onlinetestsystem.pojo.Student;

import java.util.List;

public interface StudentService extends IService<Student> {
    void addStudentWithClbum(List<StudentDto> studentDtoList);
}
