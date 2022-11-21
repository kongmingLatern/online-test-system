package com.cle.onlinetestsystem.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cle.onlinetestsystem.dto.StudentDto;
import com.cle.onlinetestsystem.pojo.Clbum;
import com.cle.onlinetestsystem.pojo.R;
import com.cle.onlinetestsystem.pojo.Student;
import com.cle.onlinetestsystem.service.ClbumService;
import com.cle.onlinetestsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;
    @Autowired
    private ClbumService clbumService;
    /**
     * 学生分页查询
     * @param page
     * @param pageSize
     * @return
     */
    @GetMapping("/page")
    public R<Page> page(int page,int pageSize){
        LambdaQueryWrapper<Student> studentLambdaQueryWrapper = new LambdaQueryWrapper<>();
       studentLambdaQueryWrapper.groupBy(Student::getClassId)
                                .orderByAsc(Student::getClassId)
                                .orderByAsc(Student::getStudentNo);
        Page<Student> studentPage = new Page<>(page,pageSize);
        studentService.page(studentPage,studentLambdaQueryWrapper);
        List<Student> records = studentPage.getRecords();
        return R.success(studentPage);
    }
    @PostMapping("/add")
    public R<String> add(@RequestBody StudentDto studentDto) {
        //判断有没有班级
        LambdaQueryWrapper<Clbum> clbumLambdaQueryWrapper = new LambdaQueryWrapper<>();
        clbumLambdaQueryWrapper.eq(Clbum::getClassNo,studentDto.getClassNo());
        Clbum clbum = clbumService.getOne(clbumLambdaQueryWrapper);
        if(clbum==null) {
            return R.error("没有该班级");
        }
        //生成密码
        String studentNo = studentDto.getStudentNo();
        String password = DigestUtils.md5DigestAsHex(("S" + studentNo + "@").getBytes(StandardCharsets.UTF_8));
        studentDto.setPassword(password);
        //插入学生
        studentDto.setClassId(clbum.getClassId());
        studentService.save(studentDto);
        return R.success("添加成功");
    }
}
