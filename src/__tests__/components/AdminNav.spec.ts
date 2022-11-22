import { findComponent, RegistGlobalComponent } from '@/utils';
import { mount } from '@vue/test-utils';
import AdminNav from '@/components/AdminNav.vue';

let wrapper = mount(AdminNav)

beforeEach(() => {
  wrapper = RegistGlobalComponent(AdminNav)
})

describe('AdminNav', () => {
  it('shoule have a tab', () => {
    const tab = findComponent(wrapper, "tab")
    expect(tab.exists()).toBe(true)
  });
  it('shoule have a sub', () => {
    const sub = findComponent(wrapper, "sub")
    expect(sub.exists()).toBe(true)
  });
});
