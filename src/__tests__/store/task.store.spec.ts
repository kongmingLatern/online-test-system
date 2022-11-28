import { setActivePinia, createPinia } from 'pinia'
import { useTask } from '@/stores/task.store'

describe('Task Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  // NOTE: 测试接口 'base/pages' 的数据'
  it.skip('should return 1 record', async () => {
    const store = useTask()
    await expect(store.getTaskByCurrentPage(1, 1)).resolves
      .toMatchInlineSnapshot(`
      [
        [
          Task {
            "baseTitle": "123",
            "createUser": null,
            "subjectName": "高数A",
            "teacherName": "沈金晶",
          },
        ],
        1,
      ]
    `)
  })
})
