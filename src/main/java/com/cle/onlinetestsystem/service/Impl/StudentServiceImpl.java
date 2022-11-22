package com.cle.onlinetestsystem.service.Impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
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

import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class StudentServiceImpl extends ServiceImpl<StudentDao, Student> implements StudentService {
    @Autowired
    private ClbumService clbumService;
    @Override
    @Transactional
    public void addStudentWithClbum(List<StudentDto> studentDtoList) {
            studentDtoList.stream().forEach(studentDto -> {
                LambdaQueryWrapper<Clbum> clbumLambdaQueryWrapper = new LambdaQueryWrapper<>();
                clbumLambdaQueryWrapper.eq(Clbum::getClassNo, studentDto.getClassNo());
                Clbum clbum = clbumService.getOne(clbumLambdaQueryWrapper);
                //判断有没有班级
                if (clbum == null) {
                            //如果没有就创建
                            clbum = new Clbum();
                            clbum.setClassNo(studentDto.getClassNo());
                            clbumService.save(clbum);
                            clbum = clbumService.getOne(clbumLambdaQueryWrapper);
                }
                String studentNo = studentDto.getStudentNo();
                String password = DigestUtils.md5DigestAsHex(("S" + studentNo + "@").getBytes(StandardCharsets.UTF_8));
                studentDto.setPassword(password);
                studentDto.setClassId(clbum.getClassId());
                this.save(studentDto);
            });
        }
    }
