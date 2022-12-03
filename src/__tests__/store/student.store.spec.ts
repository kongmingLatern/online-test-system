import { setActivePinia, createPinia } from "pinia";
import { useStudent } from "@/stores/student.store";

describe("Student Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  // NOTE: 测试接口 'student/pages' 的数据'
  it.skip("should return 1 record", async () => {
    const store = useStudent();
    await expect(store.getStudentsByPage(1, 1)).resolves.toMatchInlineSnapshot(`
      [
        [
          Student {
            "classNo": "0922201",
            "studentName": "沈金晶",
            "studentNo": "092218114",
          },
        ],
        19,
      ]
    `);
  });
});
