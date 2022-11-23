import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import { findComponent, registGlobalComponent } from "@/utils";
import Content from "@/views/admin/Content.vue";
import { h } from "vue";
import StudentInfoUpload from "../../pages/admin/StudentInfoUpload.vue"

vitest.mock('ant-design-vue')


const options = {
  props: {
    text: ''
  },
  slots: {
    header: h(Header, {
      'data-test': 'studentHeader'
    }),

    content: h(Content, {
      'data-test': 'studentContent',
      slots: {
        header: h(Header, {
          'data-test': 'header'
        }),
        nav: h(Nav, {
          'data-test': 'nav'
        }),
        main: h('main', {
          'data-test': 'main'
        })
      }
    })
  }
}

let wrapper

beforeEach(() => {
  wrapper = registGlobalComponent(StudentInfoUpload, options)
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
  it('we should have a Header component', () => {
    const header = findComponent(wrapper, "header")
    expect(header.exists()).toBe(true)
  })
  it('we should have a Nav component', () => {
    const nav = findComponent(wrapper, "nav")
    expect(nav.exists()).toBe(true)
  })
  it('we should have a Main component', () => {
    const main = findComponent(wrapper, "main")
    expect(main.exists()).toBe(true)
  })
});


describe('content component', () => {
  it('shoule have a breadcrumb component', () => {
    const breadcrumb = findComponent(wrapper, "breadcrumb")
    expect(breadcrumb.exists()).toBe(true)
  });
});