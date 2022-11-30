package com.cle.onlinetestsystem.Utils;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class MyRandomTest {
@Test
    public void test(){
    List<String> stringList = new ArrayList<>();
    stringList.add("1");
    stringList.add("12");
    stringList.add("123");
    String s = MyUtils.listConversionString(stringList);
    System.out.println(s);
}
}