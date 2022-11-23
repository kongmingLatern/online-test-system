import { findComponent, registGlobalComponent } from '@/utils';
import { mount } from '@vue/test-utils';
import AdminAside from '@/components/admin/AdminAside.vue';

let wrapper = mount(AdminAside)

beforeEach(() => {
  wrapper = registGlobalComponent(AdminAside)
})

describe('AdminAside tab', () => {
  it('shoule have a tab', () => {
    const tab = findComponent(wrapper, "tab")
    expect(tab.exists()).toBe(true)
  });
  it('tab shoule have 学生信息上传', () => {
    const tab = findComponent(wrapper, "tab")
    expect(tab.text()).toBe('学生信息上传');
  });
  it('tab shoule have 学生信息上传', () => {
    const tab1 = findComponent(wrapper, "tab1")
    expect(tab1.text()).toBe('学生信息管理');
  });
});

describe('sub', () => {
  it('shoule have a sub', () => {
    const sub = findComponent(wrapper, "sub")
    expect(sub.exists()).toBe(true)
  });
});
