package com.cle.onlinetestsystem.Utils;

import java.util.*;

public class MyRandom {
    /**
     * 随机产生指定的范围不重复的集合
     *
     * @param range,num
     * @return
     */
    public static Set<Integer> generateRandomArray(Integer range,Integer num) {
        Set<Integer> set = new LinkedHashSet<Integer>(); //集合是没有重复的值,LinkedHashSet是有顺序不重复集合,HashSet则为无顺序不重复集合
        Random ran = new Random();
        while (set.size() < num) {
            Integer tmp = ran.nextInt(range);
            set.add(tmp);//直接加入，当有重复值时，不会往里加入，直到set的长度为num才结束
        }
        return set;
    }
}
