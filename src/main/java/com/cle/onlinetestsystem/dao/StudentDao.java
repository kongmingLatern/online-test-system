package com.cle.onlinetestsystem.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cle.onlinetestsystem.pojo.Student;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface StudentDao extends BaseMapper<Student> {
}
