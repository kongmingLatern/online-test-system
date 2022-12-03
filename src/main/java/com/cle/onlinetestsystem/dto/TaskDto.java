package com.cle.onlinetestsystem.dto;

import com.cle.onlinetestsystem.pojo.Task;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TaskDto extends Task {
    private String classId;
    private String classNo;
    private String taskStartToEnd;//考试的开始到结束时间
    private Integer taskPeople;//考试人数
}
