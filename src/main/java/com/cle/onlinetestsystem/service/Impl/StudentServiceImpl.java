package com.cle.onlinetestsystem.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cle.onlinetestsystem.dao.StudentDao;
import com.cle.onlinetestsystem.pojo.Student;
import com.cle.onlinetestsystem.service.StudentService;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl extends ServiceImpl<StudentDao, Student> implements StudentService {
}
