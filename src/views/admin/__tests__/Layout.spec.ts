import { findComponent } from "@/utils"
import Layout from '@/views/admin/Layout.vue'
import { mount, VueWrapper } from "@vue/test-utils";

vitest.mock('ant-design-vue')

const mockComponent = {
  template: '<div><slot></slot></div>',
};

let wrapper

const globalComponents = {
  'a-layout': mockComponent,
  'a-layout-sider': mockComponent,
  'a-layout-header': mockComponent,
  'a-layout-content': mockComponent,
  'a-layout-footer': mockComponent,
  'a-button': mockComponent,
  'a-menu': mockComponent,
  'a-menu-item': mockComponent,
  'router-link': mockComponent,
};

beforeEach(() => {
  wrapper = mount(Layout, {
    global: {
      components: globalComponents,
      // 如果是在文件中注册的组件,需要使用 stubs
      stubs: globalComponents
    },
  })
})
describe('Layout', () => {
  it('should have a Header', () => {
    const header = wrapper.find('[data-test="header"]')
    expect(header.exists()).toBe(true)
  })
})