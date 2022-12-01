import { useTask } from '@/stores/task.store'
import { setActivePinia, createPinia } from 'pinia'
import { useBase } from '@/stores/base.store'
import { resolveSoa } from 'dns'

describe('Task Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it.skip('shoule return list about task', async () => {
    const store = useTask()
    await expect(store.getTasksByCurrentPage(1, 1)).resolves
      .toMatchInlineSnapshot(`
      [
        [
          {
            "limitTime": 120,
            "taskName": "马原考试",
            "taskPeople": 17,
            "taskStartToEnd": "2022年11月26日 08:00-10:00",
            "taskType": "期中",
          },
        ],
        4,
      ]
    `)
  })
})
