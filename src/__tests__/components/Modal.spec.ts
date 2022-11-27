import {
  findComponent,
  registGlobalComponent,
} from '@/utils'
import Modal from '@/components/Modal.vue'
import { h } from 'vue'
let wrapper
beforeEach(() => {
  wrapper = registGlobalComponent(Modal)
})

describe('Modal shoule be exist', () => {
  it('shoule have a Modal', () => {
    const modal = findComponent(wrapper, 'modal')
    expect(modal.exists()).toBe(true)
  })
})

describe('Modal shoule have a title props', () => {
  it('shoule have a title props', () => {
    const options = {
      props: {
        title: '添加学生',
      },
    }
    wrapper = registGlobalComponent(Modal, options)
    expect(wrapper.props()).toEqual({
      title: '添加学生',
    })
  })
})

describe('test Slot', () => {
  it('shoule have a title props', () => {
    const options = {
      slots: {
        modalContent: h('h1', {}, '内容'),
      },
    }
    wrapper = registGlobalComponent(Modal, options)
    expect(wrapper.html()).toContain(`<h1>内容</h1>`)
  })
})
