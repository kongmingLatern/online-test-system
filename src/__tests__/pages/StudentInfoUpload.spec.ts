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
describe('component shoule be exists', () => {
  it('we should have a Header component', () => {
    const header = findComponent(wrapper, "studentHeader")
    expect(header.exists()).toBe(true)
  })
  it('we should have a Content component', () => {
    const studentContent = findComponent(wrapper, "studentContent")
    expect(studentContent.exists()).toBe(true)
  })
})

describe('Content slot shoule be exists', () => {
  it('we should have a Header component inner Content', () => {
    const header = findComponent(wrapper, "studentHeader")
    expect(header.exists()).toBe(true)
  })
  it('we should have a Nav component', () => {
    const nav = findComponent(wrapper, "nav")
    expect(nav.exists()).toBe(true)
  })
});


describe('content component', () => {
  it('shoule have a breadcrumb component', () => {
    const breadcrumb = findComponent(wrapper, "breadcrumb")
    expect(breadcrumb.exists()).toBe(true)
  });
});