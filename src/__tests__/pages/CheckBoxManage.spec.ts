import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import {
  findComponent,
  registGlobalComponent,
} from '@/utils'
import { h } from 'vue'
import Breadcrumb from '@/components/BreadCrumb.vue'
import Content from '@/components/Content.vue'
import Main from '@/components/Main.vue'
import CheckBoxManage from '@/pages/admin/CheckBoxManage.vue'

vitest.mock('ant-design-vue')

const options = {
  props: {
    text: '',
  },
  slots: {
    header: h(Header, {
      'data-test': 'studentHeader',
    }),

    content: h(Content, {
      'data-test': 'studentContent',
      slots: {
        header: h(Header, {
          'data-test': 'header',
          text: '学生信息管理',
        }),
        nav: h(Nav, {
          'data-test': 'nav',
          slots: {
            breadcrumb: h(Breadcrumb, {}),
          },
        }),
        main: h(Main, {
          'data-test': 'main',
        }),
      },
    }),
  },
}

let wrapper

beforeEach(() => {
  wrapper = registGlobalComponent(CheckBoxManage, options)
})
describe('component shoule be exists', () => {
  it('we should have a Header component', () => {
    const header = findComponent(wrapper, 'checkBoxHeader')
    expect(header.exists()).toBe(true)
  })
  it('we should have a Nav component', () => {
    const checkBoxNav = findComponent(
      wrapper,
      'checkBoxNav'
    )
    expect(checkBoxNav.exists()).toBe(true)
  })
  it('we should have a Content component', () => {
    const checkBoxContent = findComponent(
      wrapper,
      'checkBoxContent'
    )
    expect(checkBoxContent.exists()).toBe(true)
  })
  it('we should have a Content component', () => {
    const checkBoxMain = findComponent(
      wrapper,
      'checkBoxMain'
    )
    expect(checkBoxMain.exists()).toBe(true)
  })
})

describe('content component', () => {
  it('shoule have a breadcrumb component', () => {
    const breadcrumb = findComponent(wrapper, 'breadcrumb')
    expect(breadcrumb.exists()).toBe(true)
  })
})

describe('compoent props text', () => {
  it('header text', () => {
    const options = {
      props: {
        text: '学生信息管理',
      },
    }
    const header = registGlobalComponent(Header, options)
    expect(header.find('h1').text()).toEqual('学生信息管理')
  })
})
