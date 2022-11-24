package com.cle.onlinetestsystem.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cle.onlinetestsystem.common.BaseContext;
import com.cle.onlinetestsystem.dto.BaseDto;
import com.cle.onlinetestsystem.pojo.*;
import com.cle.onlinetestsystem.service.BaseService;
import com.cle.onlinetestsystem.service.QuestionService;
import com.cle.onlinetestsystem.service.SubjectService;
import com.cle.onlinetestsystem.service.TeacherService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/base")
@Slf4j
public class BaseController {
    @Autowired
    private BaseService baseService;
    @Autowired
    private SubjectService subjectService;
    @Autowired
    private TeacherService teacherService;
    @Autowired
    private QuestionService questionService;

    /**
     * 导入题库（必须配合addBase使用）
     * @param file
     * @return
     */
    @PostMapping("/importBase")
    public R<String> importBase(MultipartFile file, HttpSession session){
       baseService.baseAdd(file,(Long)session.getAttribute("baseId"));
       return R.success("添加成功");
    }

    /**
     * 添加题库
     * @param base
     * @param session
     * @return
     */
    @PostMapping("/addBase")
    public R<String> addBase(@RequestBody Base base,HttpSession session){
        base.setCreateUser(BaseContext.getCurrentId());
        baseService.save(base);
        LambdaUpdateWrapper<Base> baseLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        baseLambdaUpdateWrapper.eq(Base::getBaseTitle,base.getBaseTitle());
        Base serviceOne = baseService.getOne(baseLambdaUpdateWrapper);
        session.setAttribute("baseId",serviceOne.getBaseId());
        return R.success("添加成功");
    }

    /**
     * 题库分页查询
     * @param page
     * @param pageSize
     * @param baseTitle
     * @return
     */
    @GetMapping("/page")
    public R<Page> page(Integer page,Integer pageSize,String baseTitle){
        Page<Base> basePage = new Page<>(page,pageSize);
        LambdaUpdateWrapper<Base> baseLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        baseLambdaUpdateWrapper.like(baseTitle!=null,Base::getBaseTitle,baseTitle)
                                .orderByAsc(Base::getBaseId);
        baseService.page(basePage);
        Page<BaseDto> baseDtoPage = new Page<>();
        BeanUtils.copyProperties(basePage,baseDtoPage);
        List<Base> records = basePage.getRecords();
        //list<Base>转换成list<BaseDto>
        List<BaseDto> baseDtoList = records.parallelStream().map(base -> {
            BaseDto baseDto = new BaseDto();
            baseDto.setBaseId(base.getBaseId());
            baseDto.setBaseTitle(base.getBaseTitle());
            LambdaUpdateWrapper<Subject> subjectLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
              subjectLambdaUpdateWrapper.eq(Subject::getSubjectId, base.getSubjectId());
            Subject subject = subjectService.getOne(subjectLambdaUpdateWrapper);
            baseDto.setSubjectName(subject.getSubjectName());
            LambdaUpdateWrapper<Teacher> teacherLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
            teacherLambdaUpdateWrapper.eq(Teacher::getTeacherId,subject.getTeacherId());
            Teacher teacher = teacherService.getOne(teacherLambdaUpdateWrapper);
            baseDto.setTeacherName(teacher.getTeacherName());
            return baseDto;
        }).collect(Collectors.toList());
        baseDtoPage.setRecords(baseDtoList);
        return R.success(baseDtoPage);
    }
    /**
     * 查询所有题库提供筛选
     */
    @GetMapping("/list")
    public R<List<Base>> list(){
        List<Base> list = baseService.list();
        return R.success(list);
    }
    /**
     * 删除题库
     */
    @DeleteMapping("/delete")
    public R<String> delete(Long baseId){
        baseService.removeById(baseId);
        LambdaQueryWrapper<Question> questionLambdaUpdateWrapper = new LambdaQueryWrapper<>();
        questionLambdaUpdateWrapper.eq(Question::getBaseId,baseId);
        questionService.remove(questionLambdaUpdateWrapper);
        return R.success("删除成功");
    }

}
