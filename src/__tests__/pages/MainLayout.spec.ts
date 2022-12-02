import {
  findComponent,
  registGlobalComponent,
} from '@/utils'
import MainLayout from '@/components/MainLayout.vue'
let wrapper
beforeEach(() => {
  wrapper = registGlobalComponent(MainLayout)
})

describe('layout ', () => {
  it('should exists -> Layout', () => {
    const layout = findComponent(wrapper, 'layout')
    expect(layout).toBeTruthy()
  })
  it('should exists -> header', () => {
    const header = findComponent(wrapper, 'header')
    expect(header).toBeTruthy()
  })
})
