package com.cle.onlinetestsystem.controller;

import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.cle.onlinetestsystem.common.BaseContext;
import com.cle.onlinetestsystem.pojo.Base;
import com.cle.onlinetestsystem.pojo.R;
import com.cle.onlinetestsystem.service.BaseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/base")
@Slf4j
public class BaseController {
    @Autowired
    private BaseService baseService;

    /**
     * 导入题库（必须配合addBase使用）
     * @param file
     * @return
     */
    @PostMapping("/importBase")
    public R<String> importBase(MultipartFile file, HttpSession session){
       baseService.baseAdd(file,(Long)session.getAttribute("baseId"));
       return R.success("添加成功");
    }

    /**
     * 添加题库
     * @param base
     * @param session
     * @return
     */
    @PostMapping("/addBase")
    public R<String> addBase(@RequestBody Base base,HttpSession session){
        base.setCreateUser(BaseContext.getCurrentId());
        baseService.save(base);
        LambdaUpdateWrapper<Base> baseLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        baseLambdaUpdateWrapper.eq(Base::getBaseTitle,base.getBaseTitle());
        Base serviceOne = baseService.getOne(baseLambdaUpdateWrapper);
        session.setAttribute("baseId",serviceOne.getBaseId());
        return R.success("添加成功");
    }
}
