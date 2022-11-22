package com.cle.onlinetestsystem.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cle.onlinetestsystem.pojo.Question;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface QuestionDao extends BaseMapper<Question> {
}
