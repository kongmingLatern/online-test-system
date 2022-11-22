package com.cle.onlinetestsystem.service.Impl;

import com.alibaba.excel.EasyExcel;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cle.onlinetestsystem.Utils.MapToQuestion;
import com.cle.onlinetestsystem.common.CustomException;
import com.cle.onlinetestsystem.dao.BaseDao;
import com.cle.onlinetestsystem.pojo.Base;
import com.cle.onlinetestsystem.pojo.Question;
import com.cle.onlinetestsystem.service.BaseService;
import com.cle.onlinetestsystem.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@Service
public class BaseServiceImpl extends ServiceImpl<BaseDao, Base> implements BaseService {
    @Autowired
    QuestionService questionService;
    @Override
    @Transactional
    public void baseAdd(MultipartFile file,Long baseId){
        List<Map<Integer,String>> list = null;
        List<Question> radioList = null;
        List<Question> selectedList=null;
        List<Question> judgeList = null;
        try {
            list = EasyExcel.read(file.getInputStream()).sheet("单选题").doReadSync();
         radioList = MapToQuestion.RadioAndSelected(list,"Radio",baseId);

            list=EasyExcel.read(file.getInputStream()).sheet("多选题").doReadSync();

       selectedList = MapToQuestion.RadioAndSelected(list, "Selected", baseId);

            list=EasyExcel.read(file.getInputStream()).sheet("判断题").doReadSync();

            judgeList = MapToQuestion.Judge(list, baseId);}
        catch (Exception e) {
            throw new CustomException("文件有误");
        }
        radioList.stream().forEach(question -> {
            questionService.save(question);
        });
        selectedList.stream().forEach(question -> {
            questionService.save(question);
        });
        judgeList.stream().forEach(question -> {
            questionService.save(question);
        });
    }

}
