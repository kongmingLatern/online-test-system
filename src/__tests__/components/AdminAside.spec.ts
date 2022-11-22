import { findComponent, RegistGlobalComponent } from '@/utils';
import { mount } from '@vue/test-utils';
import AdminAside from '@/components/AdminAside.vue';

let wrapper = mount(AdminAside)

beforeEach(() => {
  wrapper = RegistGlobalComponent(AdminAside)
})

describe('AdminAside', () => {
  it('shoule have a tab', () => {
    const tab = findComponent(wrapper, "tab")
    expect(tab.exists()).toBe(true)
  });
  it('shoule have a sub', () => {
    const sub = findComponent(wrapper, "sub")
    expect(sub.exists()).toBe(true)
  });
});
