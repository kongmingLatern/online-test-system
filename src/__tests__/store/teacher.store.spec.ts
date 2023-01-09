import { setActivePinia, createPinia } from 'pinia';
import { useTeacher } from '@/stores/teacher.store';

describe('Student Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  // NOTE: 测试接口 'teacher/pages' 的数据'
  it.skip('should return 1 record', async () => {
    const store = useTeacher();
    await expect(store.getTeachersByPage(1, 1)).resolves.toMatchInlineSnapshot(`
      [
        [
          Teacher {
            "teacherName": "沈金晶",
            "teacherNo": "0922181141",
          },
        ],
        20,
      ]
    `);
  });
});
