package com.cle.onlinetestsystem.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cle.onlinetestsystem.pojo.Base;
import org.springframework.web.multipart.MultipartFile;

public interface BaseService extends IService<Base> {
    public void baseAdd(MultipartFile file,Long BaseId);

    void deleteBaseWithQuestion(Long baseId);
}
