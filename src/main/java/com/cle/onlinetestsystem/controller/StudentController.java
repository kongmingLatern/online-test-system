package com.cle.onlinetestsystem.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cle.common.R;
import com.cle.onlinetestsystem.pojo.Student;
import com.cle.onlinetestsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    /**
     * 学生分页查询
     * @param page
     * @param pageSize
     * @return
     */
    @GetMapping("/page")
    public R<Page> page(int page,int pageSize){
        Page<Student> studentPage = new Page<>(page,pageSize);
        studentService.page(studentPage);
        return R.success(studentPage);
    }
//    @PostMapping("/add")
//    public R<Student> add(@RequestBody Student student){
//        student.
//    }
}
