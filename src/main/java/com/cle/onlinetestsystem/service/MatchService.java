package com.cle.onlinetestsystem.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cle.onlinetestsystem.pojo.Match;
import com.cle.onlinetestsystem.pojo.Question;

import java.util.List;

public interface MatchService extends IService<Match> {
    List<Question> startMatch(Long matchId);
}
