import { findComponent, registGlobalComponent } from '@/utils';

import Menu from '@/components/Menu.vue';

let wrapper;

beforeEach(() => {
  wrapper = registGlobalComponent(Menu);
});

describe('Menu shoule be existed', () => {
  it('shoule be exists', () => {
    const menu = findComponent(wrapper, 'menu');
    expect(menu.exists()).toBeTruthy();
  });
});
