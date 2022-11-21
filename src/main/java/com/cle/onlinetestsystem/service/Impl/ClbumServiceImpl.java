package com.cle.onlinetestsystem.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cle.onlinetestsystem.dao.ClbumDao;
import com.cle.onlinetestsystem.pojo.Clbum;
import com.cle.onlinetestsystem.service.ClbumService;
import org.springframework.stereotype.Service;

@Service
public class ClbumServiceImpl extends ServiceImpl<ClbumDao, Clbum> implements ClbumService {
}
