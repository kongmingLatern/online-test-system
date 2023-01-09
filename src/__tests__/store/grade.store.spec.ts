import { useGrade } from '@/stores/grade.store';
import { setActivePinia, createPinia } from 'pinia';

describe('Radio Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  // NOTE: 测试接口 '/match/getGradePage' 的数据'
  it.skip('should return 8 record', async () => {
    const store = useGrade();
    await expect(store.getGradeByCurrentPage(1, 1)).resolves
      .toMatchInlineSnapshot(`
      [
        [
          Grade {
            "baseTitle": "123",
            "classNo": "0922201",
            "grade": 0,
            "studentId": "092218114",
            "studentName": "沈金晶",
            "studentNo": "0922201",
            "subjectName": "高数A",
          },
        ],
        2,
      ]
    `);
  });
});
