package com.cle.onlinetestsystem.service.Impl;

import com.alibaba.excel.EasyExcel;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cle.onlinetestsystem.Utils.MyUtils;
import com.cle.onlinetestsystem.common.CustomException;
import com.cle.onlinetestsystem.dao.BaseDao;
import com.cle.onlinetestsystem.pojo.Base;
import com.cle.onlinetestsystem.service.BaseService;
import com.cle.onlinetestsystem.service.QuestionService;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;
import java.util.Map;

/**
 * @author kele
 */
@Service
public class BaseServiceImpl extends ServiceImpl<BaseDao, Base> implements BaseService {
    final
    QuestionService questionService;
    private final DataSourceTransactionManager transactionManager;

    public BaseServiceImpl(QuestionService questionService, DataSourceTransactionManager transactionManager) {
        this.questionService = questionService;
        this.transactionManager = transactionManager;
    }

    @Override
    @Transactional
    public void baseAdd(MultipartFile file,Long baseId){
        List<Map<Integer,String>> list = null;
        DefaultTransactionDefinition def = new DefaultTransactionDefinition();
        TransactionStatus status = transactionManager.getTransaction(def);
        try {
            list = EasyExcel.read(file.getInputStream()).sheet("单选题").doReadSync();
            questionService.saveBatch(MyUtils.RadioAndSelected(list,"Radio",baseId)) ;
            list=EasyExcel.read(file.getInputStream()).sheet("多选题").doReadSync();
            questionService.saveBatch(MyUtils.RadioAndSelected(list, "Selected", baseId));
            list=EasyExcel.read(file.getInputStream()).sheet("判断题").doReadSync();
            questionService.saveBatch(MyUtils.Judge(list, baseId));
        }
        catch (Exception e) {
            transactionManager.rollback(status);
            throw new CustomException("文件有误");
        }

    }

}
