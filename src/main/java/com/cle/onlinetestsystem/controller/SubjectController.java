package com.cle.onlinetestsystem.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.cle.onlinetestsystem.pojo.R;
import com.cle.onlinetestsystem.pojo.Subject;
import com.cle.onlinetestsystem.service.SubjectService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subject")
public class SubjectController {
    private final SubjectService subjectService;

    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    /**
     * 添加科目
     * @param subject
     * @return
     */
    @PostMapping("/add")
    public R<String> addSubject(@RequestBody Subject subject){

        subjectService.save(subject);
        return R.success("存储成功");
    }

    /**
     * 查询科目列表
     * @return
     */
    @GetMapping("/list")
    public R<List<Subject>> getList(){
        LambdaQueryWrapper<Subject> subjectLambdaQueryWrapper = new LambdaQueryWrapper<>();
        subjectLambdaQueryWrapper.select(Subject::getSubjectId,Subject::getSubjectName);
        List<Subject> list = subjectService.list(subjectLambdaQueryWrapper);
        return R.success(list);
    }
}
