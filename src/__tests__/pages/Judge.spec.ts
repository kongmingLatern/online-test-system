import Header from '@/components/Header.vue'
import {
  findComponent,
  registGlobalComponent,
} from '@/utils'
import JudgeManage from '@/pages/admin/JudgeManage.vue'

vitest.mock('ant-design-vue')

const options = {
  props: {
    text: '',
  },
}

let wrapper

beforeEach(() => {
  wrapper = registGlobalComponent(JudgeManage, options)
})
describe('component shoule be exists', () => {
  it('we should have a Nav component', () => {
    const judgeNav = findComponent(wrapper, 'judgeNav')
    expect(judgeNav.exists()).toBe(true)
  })
  it('we should have a Content component', () => {
    const judgeContent = findComponent(
      wrapper,
      'judgeContent'
    )
    expect(judgeContent.exists()).toBe(true)
  })
  it('we should have a Content component', () => {
    const judgeMain = findComponent(wrapper, 'judgeMain')
    expect(judgeMain.exists()).toBe(true)
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
