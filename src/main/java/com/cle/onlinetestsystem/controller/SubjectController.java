package com.cle.onlinetestsystem.controller;

import com.cle.onlinetestsystem.pojo.R;
import com.cle.onlinetestsystem.pojo.Subject;
import com.cle.onlinetestsystem.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/subject")
public class SubjectController {
    @Autowired
    private SubjectService subjectService;
    @PostMapping("/add")
    public R<String> addSubject(@RequestBody Subject subject){

        subjectService.save(subject);
        return R.success("存储成功");
    }
}
