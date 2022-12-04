package com.cle.onlinetestsystem.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.cle.onlinetestsystem.dto.LoginDto;
import com.cle.onlinetestsystem.pojo.R;
import com.cle.onlinetestsystem.pojo.Student;
import com.cle.onlinetestsystem.pojo.Teacher;
import com.cle.onlinetestsystem.service.StudentService;
import com.cle.onlinetestsystem.service.TeacherService;
import lombok.AllArgsConstructor;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.nio.charset.StandardCharsets;

@RestController
@AllArgsConstructor
@RequestMapping("/login")
public class LoginController {
    private final StudentService studentService;
    private final TeacherService teacherService;


    /**
     * 教师学生登录接口
     * @param loginDto
     * @param session
     * @return
     */
    @PostMapping
    public R<LoginDto> login(@RequestBody LoginDto loginDto, HttpSession session){
        String username = loginDto.getUsername();
        //查询是不是学生登录
        LambdaQueryWrapper<Student> studentLambdaQueryWrapper = new LambdaQueryWrapper<>();
        studentLambdaQueryWrapper.eq(Student::getStudentNo,username);
        Student student = studentService.getOne(studentLambdaQueryWrapper);
        if(student!=null){
            if(DigestUtils.md5DigestAsHex(loginDto.getPassword().getBytes(StandardCharsets.UTF_8)).equals(student.getPassword())){
                loginDto.setPassword(null);
                loginDto.setId(student.getStudentId());
                loginDto.setStudentOrTeacher(0);
                loginDto.setName(student.getStudentName());
                session.setAttribute("student",loginDto.getId());
            }
            else {
                return R.error("密码错误");
            }
        }
        //如果不是学生登录就查询是不是教师登录
        else {
            LambdaQueryWrapper<Teacher> teacherLambdaQueryWrapper = new LambdaQueryWrapper<>();
            teacherLambdaQueryWrapper.eq(Teacher::getTeacherNo,loginDto.getUsername());
            Teacher teacher = teacherService.getOne(teacherLambdaQueryWrapper);
            if(teacher!=null){
                if(DigestUtils.md5DigestAsHex(loginDto.getPassword().getBytes(StandardCharsets.UTF_8)).equals(teacher.getPassword()))
                {
                    loginDto.setPassword(null);
                    loginDto.setId(teacher.getTeacherId());
                    loginDto.setStudentOrTeacher(1);
                    loginDto.setName(teacher.getTeacherName());
                    session.setAttribute("teacher",loginDto.getId());
                }
                else {
                    return R.error("密码错误");
                }
            }
            else {
                return R.error("用户不存在");
            }

        }
        return R.success(loginDto);
    }
}
