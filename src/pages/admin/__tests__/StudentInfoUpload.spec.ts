import { globalComponents } from "@/mock/ant-design-vue";
import { findComponent } from "@/utils";
import { mount } from "@vue/test-utils";
import StudentInfoUpload from "../StudentInfoUpload.vue"

vitest.mock('ant-design-vue')

let wrapper

beforeEach(() => {
  wrapper = mount(StudentInfoUpload, {
    global: {
      components: globalComponents,
      // 如果是在文件中注册的组件,需要使用 stubs
      stubs: globalComponents
    },
  })
})
describe('Header', () => {
  it('we should have a Header component', () => {
    const header = findComponent(wrapper, "header")
    expect(header.exists()).toBe(true)
  })
})