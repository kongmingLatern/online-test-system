package com.cle.onlinetestsystem.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cle.onlinetestsystem.dao.MatchDao;
import com.cle.onlinetestsystem.pojo.Match;
import com.cle.onlinetestsystem.service.MatchService;
import org.springframework.stereotype.Service;

@Service
public class MatchServiceImpl extends ServiceImpl<MatchDao, Match> implements MatchService {
}
