package com.cle.onlinetestsystem.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cle.onlinetestsystem.pojo.Teacher;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TeacherDao extends BaseMapper<Teacher> {
}
