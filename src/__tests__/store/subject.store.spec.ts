import { setActivePinia, createPinia } from 'pinia'
import { useSubject } from '@/stores/subject.store'

describe('Subject Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  // NOTE: 测试接口 '/subject/list' 的数据'
  it.skip('should return 1 record', async () => {
    const store = useSubject()
    await expect(store.getSubjectList()).resolves
      .toMatchInlineSnapshot(`
      [
        [
          {
            "subjectId": "1595617742638100481",
            "subjectName": "高数A",
          },
        ],
        "获取成功",
      ]
    `)
  })
})
