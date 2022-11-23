//package com.cle.onlinetestsystem.listener;
//
//import com.cle.onlinetestsystem.pojo.Teacher;
//
//import javax.servlet.ReadListener;
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.List;
//
//public class TeacherLinstener implements ReadListener<Teacher> {
//    private List<Teacher> cachedDataList = new ArrayList<>();
//    private Teacher teacher;
//
//    public TeacherLinstener() {
//        teacher=new Teacher();
//    }
//
//    public TeacherLinstener(Teacher teacher) {
//        this.teacher = teacher;
//    }
//
//    @Override
//    public void onDataAvailable() throws IOException {
//
//    }
//
//    @Override
//    public void onAllDataRead() throws IOException {
//
//    }
//
//    @Override
//    public void onError(Throwable throwable) {
//
//    }
//}
