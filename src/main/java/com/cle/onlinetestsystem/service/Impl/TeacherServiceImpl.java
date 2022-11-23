package com.cle.onlinetestsystem.service.Impl;

import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.context.AnalysisContext;
import com.alibaba.excel.event.AnalysisEventListener;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cle.onlinetestsystem.dao.TeacherDao;
import com.cle.onlinetestsystem.pojo.Teacher;
import com.cle.onlinetestsystem.service.TeacherService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

/**
 * @author kele
 */
@Service
@Slf4j
public class TeacherServiceImpl extends ServiceImpl<TeacherDao, Teacher> implements TeacherService {

    @Override
    public void importTeacher(MultipartFile file) {
        try {
            TeacherService teacherService = this;
            EasyExcel.read(file.getInputStream(),Teacher.class,new AnalysisEventListener<Teacher>(){
                /**
                 * 批处理阈值，作用：减轻数据库的压力
                 */
                private static final int BATCH_COUNT = 2;
                /**
                 * 存储员工对象
                 */
                List<Teacher> list = new ArrayList<Teacher>(BATCH_COUNT);
                //easyExcel每次从Excel中读取一行数据就会调用一次invoke方法
                @Override
                public void invoke(Teacher teacher, AnalysisContext analysisContext) {
                    //设置默认密码
                    teacher.setPassword(DigestUtils.md5DigestAsHex(("S"+teacher.getTeacherNo()+"@").getBytes(StandardCharsets.UTF_8)));
                    //默认权限为0
                    teacher.setIsAuth(0);
                    list.add(teacher);
                    if (list.size() >= BATCH_COUNT) {
                        teacherService.saveBatch(list);
                        list.clear();
                    }
                }
                //easyExcel在将Excel表中数据读取完毕后，最终执行此方法
                @Override
                public void doAfterAllAnalysed(AnalysisContext analysisContext) {
                    //最后,如果size<BATCH_COUNT就在这里进行数据的处理
                    if (list.size() > 0) {
                        teacherService.saveBatch(list);
                    }
                }
                // 在此匿名内部类的方法里，throw new ExcelAnalysisStopException()就会终止easyExcel的运行。

                /**
                 *
                 * @param exception
                 * @param context
                 * @throws Exception
                 */
                @Override
                public void onException(Exception exception, AnalysisContext context) {
                    // 此方法能接住，在此匿名内部类的方法里抛出的异常，并进行处理，然后继续invoke方法。
                }
            }).sheet().doReadSync();
        } catch (IOException e) {
            throw new ClassCastException("文件有误");
        }
    }
}
