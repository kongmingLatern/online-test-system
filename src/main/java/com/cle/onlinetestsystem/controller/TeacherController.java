package com.cle.onlinetestsystem.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cle.onlinetestsystem.pojo.R;
import com.cle.onlinetestsystem.pojo.Teacher;
import com.cle.onlinetestsystem.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.charset.StandardCharsets;

@RestController
@RequestMapping("/teacher")
public class TeacherController {
    @Autowired
    private TeacherService teacherService;
    @PostMapping("/add")
    public R<String> add(@RequestBody Teacher teacher){
        //设置默认密码
        teacher.setPassword(DigestUtils.md5DigestAsHex(("S"+teacher.getTeacherNo()+"@").getBytes(StandardCharsets.UTF_8)));
        teacherService.save(teacher);
        return R.success("添加成功");
    }
    @PostMapping("/importTeacher")
    public R<String> importTeacher(MultipartFile file){
        teacherService.importTeacher(file);
        return R.success("添加成功");
    }

    @GetMapping("/page")
    public R<Page> page(int size,int pageSize,String teacherNo){
        LambdaQueryWrapper<Teacher> teacherLambdaQueryWrapper = new LambdaQueryWrapper<>();
        teacherLambdaQueryWrapper.like(teacherNo!=null,Teacher::getTeacherNo,teacherNo)
                                 .orderByAsc(Teacher::getTeacherNo);
     Page<Teacher> page = new Page<>(size,pageSize);
     teacherService.page(page);
     return R.success(page);
    }
}
