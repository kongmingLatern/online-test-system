package com.cle.onlinetestsystem.controller;

import com.cle.onlinetestsystem.pojo.Clbum;
import com.cle.onlinetestsystem.pojo.R;
import com.cle.onlinetestsystem.service.ClbumService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/class")
public class ClbumController {
    private final ClbumService clbumService;

    /**
     * 查询所有班级
     * @return
     */
    @GetMapping("/getAll")
    public R<List<Clbum>> getAll(){
        List<Clbum> list = clbumService.list();
        return R.success(list);
    }
}
