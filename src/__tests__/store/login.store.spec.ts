import { setActivePinia, createPinia } from 'pinia';
import { useLogin } from '@/stores/login.store';

describe('Login Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  // NOTE: 测试接口 '/login' 的数据'
  it.skip('return success', async () => {
    const store = useLogin();
    await expect(store.login('092220120', 'S092220120@')).resolves
      .toMatchInlineSnapshot(`
      [
        {
          "id": "1595242006005702658",
          "studentOrTeacher": 0,
          "username": "092220120",
        },
        "登录成功",
      ]
    `);
  });
});
