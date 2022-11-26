import { useQuestion } from '@/stores/question.store'
import { setActivePinia, createPinia } from 'pinia'

describe('Radio Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  // NOTE: 测试接口 'student/pages' 的数据'
  it.skip('should return 5 record', async () => {
    const store = useQuestion()
    await expect(store.getQuestionByCurrentPage(10, 20, 1))
      .resolves.toMatchInlineSnapshot(`
      [
        [
          Radio {
            "baseTitle": "123",
            "questionAnswer": "[认识论中的唯物论,认识论中的辩证法,认识论中的经验论,认识论中的唯理论]",
            "questionCorrect": "[认识论中的唯物论]",
            "questionList": "承认理性认识依赖于感性认识，这是（    ）。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseTitle": "123",
            "questionAnswer": "[认识过程的终结,认识仍处于初级阶段,认识过程的第一次飞跃,认识过程的第二次飞跃]",
            "questionCorrect": "[认识过程的第一次飞跃]",
            "questionList": "“从生动的直观到抽象的思维”这是（    ）。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseTitle": "123",
            "questionAnswer": "[个性共性的关系,特殊一般的关系,对立统一的关系,原因结果的关系]",
            "questionCorrect": "[对立统一的关系]",
            "questionList": "辩证唯物主义认为感性认识与理性认识之间的关系是（    ）。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseTitle": "123",
            "questionAnswer": "[类似旧唯物主义认识论的错误,类似唯心主义先验论的错误,类似唯理论的错误,类似经验论的错误]",
            "questionCorrect": "[类似唯理论的错误]",
            "questionList": "有人认为，只有写到书本上的理论才是真实可靠的，不顾实际情况，死搬书本上的教条，这在认识论上犯了 （　　）",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseTitle": "123",
            "questionAnswer": "[唯理论的错误,经验论的错误,形而上学的错误,主观唯心主义的错误]",
            "questionCorrect": "[经验论的错误]",
            "questionList": "有人把个别的、局部的经验当作普遍真理，到处搬用，否认科学理论的指导意义。这在认识论上犯了类似于（　　）。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseTitle": "123",
            "questionAnswer": "[认识,实践,本质,现象]",
            "questionCorrect": "[实践]",
            "questionList": "感性认识和理性认识是辨证统一的，统一的基础是（    ）。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseTitle": "123",
            "questionAnswer": "[感性认识和理性认识相互渗透,感性认识和理性认识相互转化,概念是思维的细胞和推理的工具,感性认识是理性认识的前提和基础]",
            "questionCorrect": "[感性认识和理性认识相互渗透]",
            "questionList": "当我们在书上看到动物、植物等一个具体概念时，就会在大脑中立即出现一个感性的形象与此概念相对应。这表明（  ）",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseTitle": "123",
            "questionAnswer": "[人的感觉是先验的,意识建构认识对象,人的感觉是包含理性的感觉,事物的本质取决于人]",
            "questionCorrect": "[人的感觉是包含理性的感觉]",
            "questionList": ".“忧心忡忡的穷人甚至对最美丽的景色都没有什么感觉;贩卖矿物的商人只看到矿物的商业价值，而看不到矿物的美和特性;也没有对矿物学的感觉。”从哲学上讲，这段话说明（  ）。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseTitle": "123",
            "questionAnswer": "[实践,经验,结论,问题]",
            "questionCorrect": "[问题]",
            "questionList": "“理论思维的起点决定着理论创新的结果”。所以理论创新只能从（  ）开始。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseTitle": "123",
            "questionAnswer": "[起消极作用,起积极作用,不起作用,有的起积极作用，有的起消极作用]",
            "questionCorrect": "[有的起积极作用，有的起消极作用]",
            "questionList": "非理性因素对人的认识活动和认识能力（  ）。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
        ],
        628,
      ]
    `)
  })
})
