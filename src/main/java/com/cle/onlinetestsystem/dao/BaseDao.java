package com.cle.onlinetestsystem.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cle.onlinetestsystem.pojo.Base;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BaseDao extends BaseMapper<Base> {
}
