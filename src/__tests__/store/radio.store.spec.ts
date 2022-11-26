import { useRadio } from '@/stores/question.store'
import { setActivePinia, createPinia } from 'pinia'

describe('Student Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  // NOTE: 测试接口 'student/pages' 的数据'
  it('should return 1 record', async () => {
    const store = useRadio()
    await expect(store.getQuestionByCurrentPage(5, 1, 1))
      .resolves.toMatchInlineSnapshot(`
      [
        [
          Radio {
            "baseTitle": "123",
            "questionAnswer": "[《共产党宣言》,历史唯物主义,剩余价值学说,《资本论》]",
            "questionCorrect": "[历史唯物主义]",
            "questionList": "（    ）开创了哲学社会科学发展的新纪元，是人类科学思想中的最大成果之一。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseTitle": "123",
            "questionAnswer": "[实事求是,人民至上,与时俱进,解放思想]",
            "questionCorrect": "[人民至上]",
            "questionList": "（  ）是马克思主义的政治立场。马克思主义政党把人民放在心中最高位置，一切奋斗都致力于实现最广大人民的根本利益。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseTitle": "123",
            "questionAnswer": "[马克思主义哲学具有的基本内容,马克思主义哲学具有的功能作用,马克思主义哲学具有的理论品质,马克思主义哲学具有的实践基础]",
            "questionCorrect": "[马克思主义哲学具有的理论品质]",
            "questionList": "“与时俱进、开拓创新”是（    ）",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseTitle": "123",
            "questionAnswer": "[马克思主义是无产阶级的世界观和方法论,哲学的存在方式是物质,无产阶级的存在方式是精神,无产阶级掌握哲学就由自为阶级转变为自在阶级]",
            "questionCorrect": "[马克思主义是无产阶级的世界观和方法论]",
            "questionList": "“哲学把无产阶级当作自己的物质武器，同样，无产阶级把哲学当作自己的精神武器”，这个论断的含义是（    ）。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Radio {
            "baseTitle": "123",
            "questionAnswer": "[劳动价值理论,剩余价值学说,科学社会主义理论,资本运动理论]",
            "questionCorrect": "[剩余价值学说]",
            "questionList": "被恩格斯誉为使得“社会主义者早先象资产阶级经济学者一样在深沉的黑暗中摸索的经济领域，得到了明亮的阳光的照耀”，指马克思关于（    ）的建立。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
        ],
        628,
      ]
    `)
  })
})
