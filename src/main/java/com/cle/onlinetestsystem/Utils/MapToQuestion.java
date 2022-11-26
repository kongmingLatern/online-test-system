package com.cle.onlinetestsystem.Utils;

import com.cle.onlinetestsystem.pojo.Question;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.stream.Collectors;

public class MapToQuestion {
    public static List<Question> RadioAndSelected(List<Map<Integer, String>> list, String type, Long baseId) {
        List<Question> questionList = list.parallelStream().map(integerStringMap -> {
            Question question = new Question();
            question.setBaseId(baseId);
            integerStringMap.forEach(new BiConsumer<Integer, String>() {
                                         final ArrayList<Integer> arrayList = new ArrayList();
                                         String correct = "[";
                                         String answer = "[";
                                         @Override
                                         public void accept(Integer k, String v) {
                                             if (k == 0) {
                                                 String trim = v.trim();
                                                 trim.toUpperCase(Locale.ROOT);
                                                 for (int i = 0; i < trim.length(); i++) {
                                                     arrayList.add((int) trim.charAt(i) - 63);
                                                 }
                                             } else if (k == 1) {
                                                 question.setQuestionType("Radio".equals(type) ? 1 : 2);
                                                 question.setQuestionList(v.trim());
                                             } else {
                                                 String s = v.replaceAll(",", "，");
                                                 answer = answer + s.trim() + ",";
                                                 question.setQuestionAnswer(answer.substring(0, answer.length() - 1) + "]");
                                                 if (arrayList.size() != 0 && arrayList.get(0).equals(k)) {
                                                     arrayList.remove(0);
                                                     correct = correct + s.trim() + ",";
                                                     question.setQuestionCorrect(correct.substring(0, correct.length() - 1) + "]");
                                                 }
                                             }
                                         }
                                     }
            );
            return question;
        }).collect(Collectors.toList());
        return questionList;
    }

    public static List<Question> Judge(List<Map<Integer, String>> list, Long baseId) {
        List<Question> judgeList = list.parallelStream().map(integerStringMap -> {
            Question question = new Question();
            question.setBaseId(baseId);
            question.setQuestionList(integerStringMap.get(1));
            question.setQuestionAnswer("[对,错]");
            String correct = integerStringMap.get(0).trim();
            if ("A".equals(correct)) {
                correct = "对";
            } else if ("B".equals(correct)) {
                correct = "错";
            }
            question.setQuestionCorrect("[" + correct + "]");
            question.setQuestionType(3);
            return question;
        }).collect(Collectors.toList());
        return judgeList;
    }
}
