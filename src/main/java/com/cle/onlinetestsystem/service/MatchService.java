package com.cle.onlinetestsystem.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cle.onlinetestsystem.dto.MatchDto;
import com.cle.onlinetestsystem.dto.QuestionDto;
import com.cle.onlinetestsystem.pojo.Match;

import java.util.List;

public interface MatchService extends IService<Match> {
    List<QuestionDto> startMatch(Long matchId, String matchPassword);

    void saveMatch(MatchDto matchDto);

    List<QuestionDto> getMatch(Long matchId, String matchPassword);

    Double computeGrade(MatchDto questionDtoList);
}