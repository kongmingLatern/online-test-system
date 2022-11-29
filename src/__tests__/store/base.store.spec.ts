import { setActivePinia, createPinia } from 'pinia'
import { useTask } from '@/stores/task.store'
import { useBase } from '@/stores/base.store'

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
  // NOTE: 测试接口 'base/list' 的数据'
  it('should return 1 record', async () => {
    const store = useBase()
    await expect(store.getBaseList('1595617742638100481'))
      .resolves.toMatchInlineSnapshot(`
      [
        [
          "123",
        ],
        "获取成功",
      ]
    `)
  })
})
