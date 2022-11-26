package com.cle.onlinetestsystem.dto;

import com.cle.onlinetestsystem.pojo.Task;
import lombok.Data;

@Data
public class TaskDto extends Task {
    String classId;
    String classNo;
}
