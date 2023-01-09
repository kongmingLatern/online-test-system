import { createPinia, setActivePinia } from 'pinia';
import { useClass } from '@/stores/class.store';

describe('test class api', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it.skip('should return obj', async () => {
    const store = useClass();
    await expect(store.getAllClass()).resolves.toMatchInlineSnapshot(`
      [
        [
          {
            "classId": "1595242005816958978",
            "classNo": "0922201",
          },
          {
            "classId": "1597887090836660226",
            "classNo": "09222012",
          },
          {
            "classId": "1595242005816958981",
            "classNo": "0922202",
          },
          {
            "classId": "1597154955540566018",
            "classNo": "09222201",
          },
          {
            "classId": "1597155216011038721",
            "classNo": "1212",
          },
          {
            "classId": "1597191319342657537",
            "classNo": "121212",
          },
          {
            "classId": "1597185829023887361",
            "classNo": "123",
          },
          {
            "classId": "1597218638652321794",
            "classNo": "123123",
          },
          {
            "classId": "1597152558160285697",
            "classNo": "qui",
          },
        ],
        "获取成功",
      ]
    `);
  });
});
