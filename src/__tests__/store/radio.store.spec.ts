import { useQuestion } from "@/stores/question.store";
import { setActivePinia, createPinia } from "pinia";

describe("Radio Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  // NOTE: 测试接口 'student/pages' 的数据'
  it.skip("should return 8 record", async () => {
    const store = useQuestion();
    await expect(store.getQuestionByCurrentPage(10, 63, 1)).resolves
      .toMatchInlineSnapshot(`
      [
        [
          Radio {
            "baseId": "1595984141143273474",
            "baseTitle": "123",
            "createUser": undefined,
            "questionAnswer": "[理想与现实,最终理想与阶段性理想,最高纲领与最低纲领,全人类理想与全体中国人民理想]",
            "questionCorrect": "[最终理想与阶段性理想]",
            "questionId": "1595984141998911556",
            "questionList": "从时间上看，远大理想与共同理想的关系是（）的关系。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseId": "1595984141143273474",
            "baseTitle": "123",
            "createUser": undefined,
            "questionAnswer": "[理想与现实,最终理想与阶段性理想,最高纲领与最低纲领,全人类理想与全体中国人民理想]",
            "questionCorrect": "[全人类理想与全体中国人民理想]",
            "questionId": "1595984141998911557",
            "questionList": "从范围来看，远大理想与共同理想的关系是()的关系。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseId": "1595984141143273474",
            "baseTitle": "123",
            "createUser": undefined,
            "questionAnswer": "[理想与现实,最终理想与阶段性理想,最高纲领与最低纲领,全人类理想与全体中国人民理想]",
            "questionCorrect": "[最高纲领与最低纲领]",
            "questionId": "1595984141998911558",
            "questionList": "从层次上看，远大理想与共同理想的关系是()的关系。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseId": "1595984141143273474",
            "baseTitle": "123",
            "createUser": undefined,
            "questionAnswer": "[物质财富极大丰富,按劳分配,按需分配,人的自由而全面的发展]",
            "questionCorrect": "[按劳分配]",
            "questionId": "1595984141998911559",
            "questionList": "不属于共产主义社会的基本特征的是（）。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseId": "1595984141143273474",
            "baseTitle": "123",
            "createUser": undefined,
            "questionAnswer": "[不能用简单化的态度来对待它，而是要用马克思主义的辩证思维和历史思维去把握它,任何时候都要坚持远大理想和共同理想的统一，不能把它们割裂开来、对立起来,没有远大理想的指引，就不会有共同理想的确立和坚持；没有共同理想的实现，远大理想就没有现实的基础,忘记远大理想只顾眼前现实工作，离开现实工作而空谈远大理想，就会脱离实际]",
            "questionCorrect": "[忘记远大理想只顾眼前现实工作，离开现实工作而空谈远大理想，就会脱离实际]",
            "questionId": "1595984141998911560",
            "questionList": "辩证思维把握和处理远大理想和共同理想的关系，以下说法不正确的是（）",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseId": "1595984141143273474",
            "baseTitle": "123",
            "createUser": undefined,
            "questionAnswer": "[核心竞争力,综合素质,国家实力,未来力量]",
            "questionCorrect": "[核心竞争力]",
            "questionId": "1595984141998911561",
            "questionList": "青年一代的理想信念、精神状态、综合素质，是一个国家发展活力的重要体现，也是一个国家()的重要因素。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseId": "1595984141143273474",
            "baseTitle": "123",
            "createUser": undefined,
            "questionAnswer": "[要深入学习马克思主义基本原理及马克思主义中国化的理论成果，特别是学习习近平新时代中国特色社会主义思想,让真理武装我们的头脑，让真理指引我们的理想，让真理坚定我们的信仰,要坚持学而信、学而用、学而行，把学习成果转化为不可撼动的理想信念，转化为正确的世界观、人生观、价值观，用理想之光照亮奋斗之路，用信仰之力开创美好未来,要积极吸收西方文化和普世价值，打造全世界的理想信念]",
            "questionCorrect": "[要积极吸收西方文化和普世价值，打造全世界的理想信念]",
            "questionId": "1595984141998911562",
            "questionList": "当代大学生要坚定理想信念，自觉做中国特色社会主义共同理想的坚定信仰者、忠诚实践者。以下说法不正确的是（）",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseId": "1595984141143273474",
            "baseTitle": "123",
            "createUser": undefined,
            "questionAnswer": "[要投身新时代中国特色社会主义事业,投身党和人民在中国特色社会主义新时代的伟大奋斗,做走在新时代前列的奋进者、开拓者、奉献者,要抓紧机遇，谋取好的工作，挣更多的钱，活出人生巅峰]",
            "questionCorrect": "[要抓紧机遇，谋取好的工作，挣更多的钱，活出人生巅峰]",
            "questionId": "1595984141998911563",
            "questionList": "当代青年要积极投身新时代中国特色社会主义事业，勇做担当中华民族伟大复兴大任的时代新人。以下选择不正确的是（）",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseId": "1597624468123942913",
            "baseTitle": "高数",
            "createUser": undefined,
            "questionAnswer": "[《共产党宣言》,历史唯物主义,剩余价值学说,《资本论》]",
            "questionCorrect": "[历史唯物主义]",
            "questionId": "1597624468904083458",
            "questionList": "（    ）开创了哲学社会科学发展的新纪元，是人类科学思想中的最大成果之一。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseId": "1597624468123942913",
            "baseTitle": "高数",
            "createUser": undefined,
            "questionAnswer": "[实事求是,人民至上,与时俱进,解放思想]",
            "questionCorrect": "[人民至上]",
            "questionId": "1597624468904083459",
            "questionList": "（  ）是马克思主义的政治立场。马克思主义政党把人民放在心中最高位置，一切奋斗都致力于实现最广大人民的根本利益。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
        ],
        1256,
      ]
    `);
  });
});
