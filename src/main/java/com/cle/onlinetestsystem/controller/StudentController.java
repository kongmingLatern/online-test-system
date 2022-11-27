package com.cle.onlinetestsystem.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cle.onlinetestsystem.dto.StudentDto;
import com.cle.onlinetestsystem.pojo.Clbum;
import com.cle.onlinetestsystem.pojo.R;
import com.cle.onlinetestsystem.pojo.Student;
import com.cle.onlinetestsystem.service.ClbumService;
import com.cle.onlinetestsystem.service.StudentService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.stream.Collectors;
@Slf4j
@RestController
@AllArgsConstructor
@RequestMapping("/student")
public class StudentController {
    private final StudentService studentService;
    private final ClbumService clbumService;


    /**
     * 学生分页查询
     * @param page
     * @param pageSize
     * @return
     */
    @GetMapping("/page")
    public R<Page> page(Integer page,Integer pageSize,String studentNo){
        //升序查询班级id和学生编号
        LambdaQueryWrapper<Student> studentLambdaQueryWrapper = new LambdaQueryWrapper<>();
       studentLambdaQueryWrapper.like(studentNo!=null,Student::getStudentNo,studentNo)
                                .orderByAsc(Student::getClassId)
                                .orderByAsc(Student::getStudentNo);
       //分页查询
        Page<Student> studentPage = new Page<>(page,pageSize);
        studentService.page(studentPage,studentLambdaQueryWrapper);
        //studentPage转为studentDtoPage
        List<Student> records = studentPage.getRecords();
        Page<StudentDto> studentDtoPage = new Page<>();
        BeanUtils.copyProperties(studentPage,studentDtoPage);
        List<StudentDto> collect = records.parallelStream().map(student -> {
            StudentDto studentDto = new StudentDto();
            LambdaQueryWrapper<Clbum> clbumLambdaQueryWrapper = new LambdaQueryWrapper<>();
            clbumLambdaQueryWrapper.eq(Clbum::getClassId, student.getClassId());
            Clbum clbum = clbumService.getOne(clbumLambdaQueryWrapper);
            BeanUtils.copyProperties(student, studentDto);
            studentDto.setClassNo(clbum.getClassNo());
            return studentDto;
        }).collect(Collectors.toList());
        studentDtoPage.setRecords(collect);
        return R.success(studentDtoPage);
    }
    /**
     * 添加学生
     * @param studentDto
     * @return
     */
    @PostMapping("/add")
    public R<String> add(@RequestBody StudentDto studentDto) {
        studentService.addStudentWithClbum(studentDto);
//        //判断有没有班级
//        LambdaQueryWrapper<Clbum> clbumLambdaQueryWrapper = new LambdaQueryWrapper<>();
//        clbumLambdaQueryWrapper.eq(Clbum::getClassNo,studentDto.getClassNo());
//        Clbum clbum = clbumService.getOne(clbumLambdaQueryWrapper);
//        if(clbum==null) {
//            return R.error("没有该班级");
//        }
//        //生成密码
//        String studentNo = studentDto.getStudentNo();
//        String password = DigestUtils.md5DigestAsHex(("S" + studentNo + "@").getBytes(StandardCharsets.UTF_8));
//        studentDto.setPassword(password);
//        //插入学生
//        studentDto.setClassId(clbum.getClassId());
//        studentService.save(studentDto);
        return R.success("添加成功");
    }
    /**
     * 修改密码
     */
    @PutMapping("/updatePassword")
    public R<String> updatePassword(@RequestBody Student student){
        student.setPassword(DigestUtils.md5DigestAsHex(student.getPassword().getBytes(StandardCharsets.UTF_8)));
        studentService.updateById(student);
        return R.success("修改成功");
    }
    /**
     * 删除学生
     */
    @DeleteMapping("/delete")
    private R<String> delete(Long studentId){
        studentService.removeById(studentId);
        return R.success("删除成功");
    }

    /**
     * excel导入学生
     * @param file
     * @return
     */
    @PostMapping("/importStudent")
    private R<String> importStudent(MultipartFile file){
        studentService.improtStudent(file);
        return R.success("添加成功");
    }
}
