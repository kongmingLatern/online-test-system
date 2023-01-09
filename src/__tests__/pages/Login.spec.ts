import { beforeEach } from 'vitest';
import { findComponent } from '../../utils/vueUtils';
import { registGlobalComponent } from '@/utils';
import Login from '@/pages/Login.vue';
let wrapper;
beforeEach(() => {
  wrapper = registGlobalComponent(Login);
});
describe('it shoule be exist', () => {
  it('shoule be existed', () => {
    const login = findComponent(wrapper, 'login');
    expect(login.exists()).toBeTruthy();
  });
});
