import { globalComponents } from '@/mock/ant-design-vue';
import { findComponent } from '@/utils';
import Layout from '@/views/admin/Layout.vue'
import { mount } from "@vue/test-utils";

vitest.mock('ant-design-vue')

let wrapper

describe('Layout', () => {
  beforeEach(() => {
    wrapper = mount(Layout, {
      global: {
        components: globalComponents,
        stubs: globalComponents
      },
    })
  })
  it('should have a Header component', () => {
    const header = findComponent(wrapper, "header")
    expect(header.exists()).toBe(true)
  })

  it('should have a Aside component', () => {
    const aside = findComponent(wrapper, "aside")
    expect(aside.exists()).toBe(true)
  })

})