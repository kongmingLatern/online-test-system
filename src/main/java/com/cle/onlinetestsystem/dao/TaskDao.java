package com.cle.onlinetestsystem.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cle.onlinetestsystem.pojo.R;
import com.cle.onlinetestsystem.pojo.Task;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.bind.annotation.PostMapping;

@Mapper
public interface TaskDao extends BaseMapper<Task> {

}
