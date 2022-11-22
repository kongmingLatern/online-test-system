import { findComponent, RegistGlobalComponent } from "@/utils";
import StudentInfoUpload from "../../pages/admin/StudentInfoUpload.vue"

vitest.mock('ant-design-vue')

const options = {
  props: {
    text: ''
  }
}

let wrapper

beforeEach(() => {
  wrapper = RegistGlobalComponent(StudentInfoUpload, options)
})
describe('Header', () => {
  it('we should have a Header component', () => {
    const header = findComponent(wrapper, "studentHeader")
    expect(header.exists()).toBe(true)
  })
  it('we should have a Aside component', () => {
    const studentContent = findComponent(wrapper, "studentContent")
    expect(studentContent.exists()).toBe(true)
  })
})
