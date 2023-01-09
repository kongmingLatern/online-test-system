import { useTask } from '@/stores/task.store';
import { setActivePinia, createPinia } from 'pinia';

describe('Task Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it.skip('shoule return list about task', async () => {
    const store = useTask();
    await expect(store.getTasksByCurrentPage(1, 1)).resolves
      .toMatchInlineSnapshot(`
      [
        [
          {
            "limitTime": 120,
            "taskId": "1596427549662015490",
            "taskName": "马原考试",
            "taskPeople": 17,
            "taskStartToEnd": "2022年11月26日 08:00-10:00",
            "taskTime": undefined,
            "taskType": "期中",
          },
        ],
        7,
      ]
    `);
  });
});
