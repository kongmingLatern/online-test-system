import { setActivePinia, createPinia } from 'pinia'
import { useBase } from '@/stores/base.store'

describe('Task Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  // NOTE: 测试接口 'base/pages' 的数据'
  it.skip('should return 1 record', async () => {
    const store = useBase()
    await expect(store.getBasesByCurrentPage(1, 1)).resolves
      .toMatchInlineSnapshot(`
      [
        [
          {
            "baseId": "1595984141143273474",
            "baseTitle": "123",
            "createUser": null,
            "subjectName": "高数A",
            "teacherName": "沈金晶",
          },
        ],
        2,
      ]
    `)
  })
  // NOTE: 测试接口 'base/list' 的数据'
  it.skip('should return 1 record', async () => {
    const store = useBase()
    await expect(store.getBaseList('1595617742638100481'))
      .resolves.toMatchInlineSnapshot(`
      [
        [
          {
            "baseId": "1595984141143273474",
            "baseTitle": "123",
            "createUser": null,
            "subjectId": null,
          },
          {
            "baseId": "1597624468123942913",
            "baseTitle": "高数",
            "createUser": null,
            "subjectId": null,
          },
        ],
        "获取成功",
      ]
    `)
  })
})
