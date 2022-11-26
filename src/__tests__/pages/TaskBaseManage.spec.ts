import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import {
  findComponent,
  registGlobalComponent,
} from '@/utils'
import TaskBaseManage from '@/pages/admin/TaskBaseManage.vue'

vitest.mock('ant-design-vue')

const options = {
  props: {
    text: '',
  },
}

let wrapper

beforeEach(() => {
  wrapper = registGlobalComponent(TaskBaseManage, options)
})
describe('component shoule be exists', () => {
  it('we should have a Nav component', () => {
    const taskBaseNav = findComponent(
      wrapper,
      'taskBaseNav'
    )
    expect(taskBaseNav.exists()).toBe(true)
  })
  it('we should have a Content component', () => {
    const taskBaseContent = findComponent(
      wrapper,
      'taskBaseContent'
    )
    expect(taskBaseContent.exists()).toBe(true)
  })
  it('we should have a Content component', () => {
    const taskBaseMain = findComponent(
      wrapper,
      'taskBaseMain'
    )
    expect(taskBaseMain.exists()).toBe(true)
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
