package com.cle.onlinetestsystem.Utils;

import com.cle.onlinetestsystem.scheduling.RedisScheduling;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class MyRandomTest {

    @Autowired
    private RedisUtils redisUtils;

    @Autowired
    private RedisScheduling redisScheduling;
@Test
    public void test(){
       redisScheduling.computeGradeFromRedis();
}
}