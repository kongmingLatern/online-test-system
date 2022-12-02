import {
  findComponent,
  registGlobalComponent,
} from '@/utils'
import TaskBase from '@/pages/home/TaskBase.vue'
let wrapper
beforeEach(() => {
  wrapper = registGlobalComponent(TaskBase)
})
describe('components shoule be exists', () => {
  it('shoule be existed', () => {
    const components = findComponent(wrapper, 'taskBase')
    expect(components).toBeTruthy()
  })
})
