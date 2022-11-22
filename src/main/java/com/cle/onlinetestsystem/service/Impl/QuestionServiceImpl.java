package com.cle.onlinetestsystem.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cle.onlinetestsystem.dao.QuestionDao;
import com.cle.onlinetestsystem.pojo.Question;
import com.cle.onlinetestsystem.service.QuestionService;
import org.springframework.stereotype.Service;
@Service

public class QuestionServiceImpl extends ServiceImpl<QuestionDao, Question> implements QuestionService {
}
