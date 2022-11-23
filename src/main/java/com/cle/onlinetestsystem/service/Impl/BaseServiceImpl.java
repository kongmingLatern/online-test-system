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
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;
import java.util.Map;

@Service
public class BaseServiceImpl extends ServiceImpl<BaseDao, Base> implements BaseService {
    @Autowired
    QuestionService questionService;
    @Autowired
    private DataSourceTransactionManager transactionManager;
    @Override
    @Transactional
    public void baseAdd(MultipartFile file,Long baseId){
        List<Map<Integer,String>> list = null;
        List<Question> radioList = null;
        List<Question> selectedList=null;
        List<Question> judgeList = null;
        DefaultTransactionDefinition def = new DefaultTransactionDefinition();
        TransactionStatus status = transactionManager.getTransaction(def);
        try {
            list = EasyExcel.read(file.getInputStream()).sheet("单选题").doReadSync();
            questionService.saveBatch(MapToQuestion.RadioAndSelected(list,"Radio",baseId)) ;
            list=EasyExcel.read(file.getInputStream()).sheet("多选题").doReadSync();
            questionService.saveBatch(MapToQuestion.RadioAndSelected(list, "Selected", baseId));
            list=EasyExcel.read(file.getInputStream()).sheet("判断题").doReadSync();
            questionService.saveBatch(MapToQuestion.Judge(list, baseId));

        }
        catch (Exception e) {
            transactionManager.rollback(status);
            throw new CustomException("文件有误");
        }

    }

}
