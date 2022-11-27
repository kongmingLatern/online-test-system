import Header from '@/components/Header.vue'
import TeacherManager from '@/pages/admin/TeacherManage.vue'
import {
  findComponent,
  registGlobalComponent,
} from '@/utils'

vitest.mock('ant-design-vue')

const options = {
  props: {
    text: '',
  },
}

let wrapper

beforeEach(() => {
  wrapper = registGlobalComponent(TeacherManager, options)
})
describe('component shoule be exists', () => {
  it('we should have a Nav component', () => {
    const teacherNav = findComponent(wrapper, 'teacherNav')
    expect(teacherNav.exists()).toBe(true)
  })
  it('we should have a Content component', () => {
    const teacherContent = findComponent(
      wrapper,
      'teacherContent'
    )
    expect(teacherContent.exists()).toBe(true)
  })
  it('we should have a Content component', () => {
    const teacherMain = findComponent(
      wrapper,
      'teacherMain'
    )
    expect(teacherMain.exists()).toBe(true)
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
        text: '教师管理',
      },
    }
    const header = registGlobalComponent(Header, options)
    expect(header.find('h1').text()).toEqual('教师管理')
  })
})
