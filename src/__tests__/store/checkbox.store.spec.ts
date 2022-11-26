import { useQuestion } from '@/stores/question.store'
import { setActivePinia, createPinia } from 'pinia'

describe('Checkbox Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  // NOTE: 测试接口 'question/page' 的数据'
  it('should return 5 record', async () => {
    const store = useQuestion()
    await expect(store.getQuestionByCurrentPage(5, 1, 2))
      .resolves.toMatchInlineSnapshot(`
      [
        [
          Checkbox {
            "baseTitle": "123",
            "questionAnswer": "[无产阶级反对资产阶级的斗争进入新阶段,无产阶级成为一支独立的政治力量,无产阶级与资产阶级的矛盾上升为主要矛盾,无产阶级已经由自在的阶级变为自为的阶级,无产阶级在思想上和政治上还不成熟]",
            "questionCorrect": "[无产阶级反对资产阶级的斗争进入新阶段,无产阶级成为一支独立的政治力量,无产阶级与资产阶级的矛盾上升为主要矛盾,无产阶级已经由自在的阶级变为自为的阶级]",
            "questionList": "19世纪 30 - 40年代爆发的三大工人运动说明了",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Checkbox {
            "baseTitle": "123",
            "questionAnswer": "[德国西里西亚工人起义,法国里昂工人起义,意大利罗马工人大罢工,英国工人宪章运动,西班牙船员大罢工]",
            "questionCorrect": "[德国西里西亚工人起义,法国里昂工人起义,英国工人宪章运动]",
            "questionList": "19世纪30-40年代，标志着无产阶级反对资产阶级的阶级斗争进入新阶段的欧洲工人运动是（    ）。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Checkbox {
            "baseTitle": "123",
            "questionAnswer": "[圣西门和傅立叶,英国的欧文,意大利的托玛斯 ·康帕内拉 .,英国的托玛斯·莫尔,法国的摩莱里]",
            "questionCorrect": "[圣西门和傅立叶,英国的欧文]",
            "questionList": "１９世纪的空想社会主义代表人物是",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Checkbox {
            "baseTitle": "123",
            "questionAnswer": "[托马斯·莫尔,昂利·圣西门,沙尔·傅立叶,罗伯特·欧文,托马斯·康帕内拉]",
            "questionCorrect": "[昂利·圣西门,沙尔·傅立叶,罗伯特·欧文]",
            "questionList": "19世纪空想社会主义的主要代表是（    ）。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
          Checkbox {
            "baseTitle": "123",
            "questionAnswer": "[共产主义者同盟,正义者同盟,第一国际,第二国际,第三国际]",
            "questionCorrect": "[共产主义者同盟,第一国际]",
            "questionList": "从19世纪40年代后半期起马克思与恩格斯一起先后改组和创建了共产主义组织（    ）。",
            "subjectName": undefined,
            "teacherName": undefined,
          },
        ],
        479,
      ]
    `)
  })
})
