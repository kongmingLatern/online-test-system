package com.cle.onlinetestsystem.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cle.onlinetestsystem.Utils.MyUtils;
import com.cle.onlinetestsystem.dto.QuestionDto;
import com.cle.onlinetestsystem.pojo.Base;
import com.cle.onlinetestsystem.pojo.Question;
import com.cle.onlinetestsystem.pojo.R;
import com.cle.onlinetestsystem.service.BaseService;
import com.cle.onlinetestsystem.service.QuestionService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
@Slf4j
@RestController
@AllArgsConstructor
@RequestMapping("/question")
public class QuestionController {
    private final QuestionService questionService;
    private final BaseService baseService;


    /**
     * 题目分页查询
     * @param page
     * @param pageSize
     * @param baseId
     * @param questionList
     * @param questionType
     * @return
     */
    @GetMapping("/page")
//    @Cacheable(value = "questionCache",key = "#baseId")
    public R<Page> page(Integer page, Integer pageSize, Long baseId, String questionList,Integer questionType){
        Page<Question> questionPage = new Page<>(page,pageSize);
        LambdaQueryWrapper<Question> questionLambdaQueryWrapper = new LambdaQueryWrapper<>();
        questionLambdaQueryWrapper.eq(baseId!=null,Question::getBaseId,baseId)
                                  .like(questionList!=null,Question::getQuestionList,questionList)
                                  .eq(questionType!=null,Question::getQuestionType,questionType);
        questionService.page(questionPage,questionLambdaQueryWrapper);
        Page<QuestionDto> questionDtoPage = new Page<>();
        BeanUtils.copyProperties(questionPage,questionDtoPage);
        List<Question> records = questionPage.getRecords();
        List<QuestionDto> questionDtoList = records.parallelStream().map(item -> {
            QuestionDto questionDto = new QuestionDto();
            questionDto.setQuestionId(item.getQuestionId());
            questionDto.setQuestionList(item.getQuestionList());
            questionDto.setQuestionAnswer(item.getQuestionAnswer());
            questionDto.setQuestionCorrect(item.getQuestionCorrect());
            questionDto.setBaseId(item.getBaseId());
            LambdaQueryWrapper<Base> baseLambdaQueryWrapper = new LambdaQueryWrapper<>();
            baseLambdaQueryWrapper.eq(Base::getBaseId, item.getBaseId());
            Base base = baseService.getOne(baseLambdaQueryWrapper);
            questionDto.setBaseTitle(base.getBaseTitle());
            return questionDto;
        }).collect(Collectors.toList());
        questionDtoPage.setRecords(questionDtoList);
        return R.success(questionDtoPage);
    }

    /**
     * 添加单个题目
     * @param questionDto
     * @return
     */
    @PostMapping("/add")
    public R<String> addQuestion(@RequestBody QuestionDto questionDto)
    {
        questionDto.setQuestionAnswer( MyUtils.listConversionString(questionDto.getQuestionAnswerList()));
        questionDto.setQuestionCorrect(MyUtils.listConversionString(questionDto.getQuestionCorrectList()));
        questionService.save(questionDto);
        return R.success("添加成功");
    }

    /**
     * 删除单个题目
     * @param questionId
     * @return
     */
    @DeleteMapping("/delete")
    public R<String> deleteQuestion(Long questionId)
    {
        questionService.removeById(questionId);
        return R.success("删除成功");
    }
}
