import { useGrade } from '@/stores/grade.store'
import { setActivePinia, createPinia } from 'pinia'

describe('Radio Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  // NOTE: 测试接口 'student/pages' 的数据'
  it.skip('should return 8 record', async () => {
    const store = useGrade()
    await expect(store.getGradeByCurrentPage(1, 1)).resolves
      .toMatchInlineSnapshot(`
      [
        [
          Grade {
            "baseTitle": "123",
            "classNo": "沈金晶",
            "grade": 99,
            "studentName": "0922201",
            "studentNo": "092218114",
            "subjectName": "高数A",
          },
        ],
        54,
      ]
    `)
  })
})
