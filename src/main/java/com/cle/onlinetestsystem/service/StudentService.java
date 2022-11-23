package com.cle.onlinetestsystem.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cle.onlinetestsystem.dto.StudentDto;
import com.cle.onlinetestsystem.pojo.Student;
import org.springframework.web.multipart.MultipartFile;

public interface StudentService extends IService<Student> {
    void addStudentWithClbum(StudentDto studentDto);
    void improtStudent(MultipartFile file);
}
