import { setActivePinia, createPinia } from 'pinia'
import { useStudent } from '@/stores/student.store'
import { Student } from '@/utils'

describe('Student Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  // NOTE: 测试接口 'student/pages' 的数据'
  it.skip('should return 1 record', async () => {
    const store = useStudent()
    await expect(
      store.getStudentsByPage(1, 1)
    ).resolves.toEqual([
      [new Student('092218114', '沈金晶', '0922201')],
      19,
    ])
  })
})
