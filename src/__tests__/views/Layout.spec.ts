import { findComponent, RegistGlobalComponent } from '@/utils';
import Layout from '@/views/admin/Layout.vue'

vitest.mock('ant-design-vue')

let wrapper

beforeEach(() => {
  wrapper = RegistGlobalComponent(Layout)
})
describe('Layout', () => {
  it('should have a Header component', () => {
    const header = findComponent(wrapper, "header")
    expect(header.exists()).toBe(true)
  })

  it('should have a Aside component', () => {
    const aside = findComponent(wrapper, "aside")
    expect(aside.exists()).toBe(true)
  })

})