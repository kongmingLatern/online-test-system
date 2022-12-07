package com.cle.onlinetestsystem.common;

import com.cle.onlinetestsystem.pojo.R;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLIntegrityConstraintViolationException;

@ControllerAdvice(annotations = {RestController.class, Controller.class})
@ResponseBody
@Slf4j
public class GlobalExceptionHandler {
    @ExceptionHandler(CustomException.class)
    public R<String> customException(CustomException customException){
        return R.error(customException.getMessage());
    }
    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
    public R<String> sqlIntegrityConstraintViolationException(SQLIntegrityConstraintViolationException sqlIntegrityConstraintViolationException){
        if(sqlIntegrityConstraintViolationException.getMessage().contains("Duplicate entry")){
            String[] split = sqlIntegrityConstraintViolationException.getMessage().split(" ");
            String msg =  split[2] + "已存在";
            return R.error(msg);
        }
        return R.error("未知错误");
    }
    @ExceptionHandler(Exception.class)
    public R<String> exception(Exception e){
        return R.error("网络异常，请稍后再试");
    }
}
