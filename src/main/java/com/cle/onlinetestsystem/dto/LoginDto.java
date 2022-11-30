package com.cle.onlinetestsystem.dto;

import lombok.Data;

/**
 * 封装前端传过来的教工号或者学号和密码
 */
@Data
public class LoginDto {
    private Long id;//主键id
    private String username;//用户名
    private String password;//密码
    private Integer studentOrTeacher;//1为老师0为学生
}