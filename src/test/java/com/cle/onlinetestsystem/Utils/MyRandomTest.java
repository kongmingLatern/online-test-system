package com.cle.onlinetestsystem.Utils;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class MyRandomTest {
@Test
    public void test(){
    Set<Integer> integers = MyRandom.generateRandomArray(100, 100);
    System.out.println(integers);
}
}