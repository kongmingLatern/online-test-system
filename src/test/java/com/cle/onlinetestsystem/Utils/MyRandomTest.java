package com.cle.onlinetestsystem.Utils;

import com.cle.onlinetestsystem.scheduling.MatchScheduling;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class MyRandomTest {

    @Autowired
    private RedisUtils redisUtils;

    @Autowired
    private MatchScheduling redisScheduling;
@Test
    public void test(){
       redisUtils.add("123",123);
    Object o = redisUtils.get("123");
    System.out.println(o);
}
}