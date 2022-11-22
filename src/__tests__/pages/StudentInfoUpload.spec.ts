import { findComponent, RegistGlobalComponent } from "@/utils";
import StudentInfoUpload from "../../pages/admin/StudentInfoUpload.vue"

vitest.mock('ant-design-vue')

let wrapper

beforeEach(() => {
  wrapper = RegistGlobalComponent(StudentInfoUpload)
})
describe('Header', () => {
  it('we should have a Header component', () => {
    const header = findComponent(wrapper, "adminHeader")
    expect(header.exists()).toBe(true)
  })
  it('we should have a Aside component', () => {
    const aside = findComponent(wrapper, "adminAside")
    expect(aside.exists()).toBe(true)
  })
})
