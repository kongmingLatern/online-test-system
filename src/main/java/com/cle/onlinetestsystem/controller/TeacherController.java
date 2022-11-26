package com.cle.onlinetestsystem.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cle.onlinetestsystem.pojo.R;
import com.cle.onlinetestsystem.pojo.Teacher;
import com.cle.onlinetestsystem.service.TeacherService;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@RequestMapping("/teacher")
public class TeacherController {
    private final TeacherService teacherService;

    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    /**
     * 单独添加教师
     * @param teacher
     * @return
     */
    @PostMapping("/add")
    public R<String> add(@RequestBody Teacher teacher){
        //设置默认密码
        teacher.setPassword(DigestUtils.md5DigestAsHex(("S"+teacher.getTeacherNo()+"@").getBytes(StandardCharsets.UTF_8)));
        teacherService.save(teacher);
        return R.success("添加成功");
    }

    /**
     * excel导入教师
     * @param file
     * @return
     */
    @PostMapping("/importTeacher")
    public R<String> importTeacher(MultipartFile file){
        teacherService.importTeacher(file);
        return R.success("添加成功");
    }

    /**
     * 分页查询教师
     * @param size
     * @param pageSize
     * @param teacherNo
     * @return
     */
    @GetMapping("/page")
    public R<Page> page(int size,int pageSize,String teacherNo){
        LambdaQueryWrapper<Teacher> teacherLambdaQueryWrapper = new LambdaQueryWrapper<>();
        teacherLambdaQueryWrapper.like(teacherNo!=null,Teacher::getTeacherNo,teacherNo)
                                 .orderByAsc(Teacher::getTeacherNo);
     Page<Teacher> page = new Page<>(size,pageSize);
     teacherService.page(page);
     return R.success(page);
    }
    /**
     * 下拉查询所有老师
     */
    @GetMapping("/list")
    public R<List<Teacher>> list(){
        List<Teacher> list = teacherService.list();
        return R.success(list);

    }
}
