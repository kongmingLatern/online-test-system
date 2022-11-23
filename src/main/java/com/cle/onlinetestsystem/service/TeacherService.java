package com.cle.onlinetestsystem.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cle.onlinetestsystem.pojo.Teacher;
import org.springframework.web.multipart.MultipartFile;

public interface TeacherService extends IService<Teacher> {
    void importTeacher(MultipartFile file);
}
