package com.cle.onlinetestsystem.service.Impl;

import com.alibaba.excel.EasyExcel;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cle.onlinetestsystem.common.CustomException;
import com.cle.onlinetestsystem.dao.StudentDao;
import com.cle.onlinetestsystem.dto.StudentDto;
import com.cle.onlinetestsystem.pojo.Clbum;
import com.cle.onlinetestsystem.pojo.Student;
import com.cle.onlinetestsystem.service.ClbumService;
import com.cle.onlinetestsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.DigestUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

/**
 * @author kele
 */
@Service
public class StudentServiceImpl extends ServiceImpl<StudentDao, Student> implements StudentService {
    @Autowired
    private ClbumService clbumService;
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void addStudentWithClbum(StudentDto studentDto) {
        LambdaQueryWrapper<Clbum> clbumLambdaQueryWrapper = new LambdaQueryWrapper<>();
        clbumLambdaQueryWrapper.eq(Clbum::getClassNo, studentDto.getClassNo());
        long count = clbumService.count(clbumLambdaQueryWrapper);
        Clbum clbum=new Clbum();
        if (count == 0) {
            //如果没有就创建
            clbum.setClassNo(studentDto.getClassNo());
            clbumService.save(clbum);
        }clbum = clbumService.getOne(clbumLambdaQueryWrapper);
        String studentNo = studentDto.getStudentNo();
        String password = DigestUtils.md5DigestAsHex(("S" + studentNo + "@").getBytes(StandardCharsets.UTF_8));
                studentDto.setPassword(password);
        studentDto.setClassId(clbum.getClassId());
        this.save(studentDto);

//            studentDtoList.stream().forEach(studentDto -> {
//                LambdaQueryWrapper<Clbum> clbumLambdaQueryWrapper = new LambdaQueryWrapper<>();
//                clbumLambdaQueryWrapper.eq(Clbum::getClassNo, studentDto.getClassNo());
//                Clbum clbum = clbumService.getOne(clbumLambdaQueryWrapper);
//                //判断有没有班级
//                if (clbum == null) {
//                            //如果没有就创建
//                            clbum = new Clbum();
//                            clbum.setClassNo(studentDto.getClassNo());
//                            clbumService.save(clbum);
//                            clbum = clbumService.getOne(clbumLambdaQueryWrapper);
//                }
//                String studentNo = studentDto.getStudentNo();
//                String password = DigestUtils.md5DigestAsHex(("S" + studentNo + "@").getBytes(StandardCharsets.UTF_8));
//                studentDto.setPassword(password);
//                studentDto.setClassId(clbum.getClassId());
//                this.save(studentDto);
//            });
        }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void improtStudent(MultipartFile file) {
        List<Map<Integer,String>> list;
        try {
             list = EasyExcel.read(file.getInputStream()).sheet().doReadSync();
        } catch (IOException e) {
            throw new CustomException("文件有误");
        }

        list.stream().forEach(integerStringMap -> {
            LambdaQueryWrapper<Clbum> clbumLambdaQueryWrapper = new LambdaQueryWrapper<>();
            clbumLambdaQueryWrapper.eq(Clbum::getClassNo,integerStringMap.get(0).trim());
            long count = clbumService.count(clbumLambdaQueryWrapper);
            Clbum clbum=new Clbum();
            if (count == 0) {
                //如果没有就创建
                clbum.setClassNo(integerStringMap.get(0).trim());
                clbumService.save(clbum);
            }
            //查询classid
            clbum = clbumService.getOne(clbumLambdaQueryWrapper);
            Long classId = clbum.getClassId();
            //存储学生
            Student student = new Student();
            student.setStudentNo(integerStringMap.get(1).trim());
            student.setStudentName(integerStringMap.get(2).trim());
            student.setPassword(DigestUtils.md5DigestAsHex(("S" + student.getStudentNo().trim() + "@").getBytes(StandardCharsets.UTF_8)));
            student.setClassId(classId);
            this.save(student);
        });
    }
}
