import {
  findComponent,
  registGlobalComponent,
} from '@/utils'

import Select from '@/components/Select.vue'

const wrapper = registGlobalComponent(Select as any)
describe('Select shoule be exists', () => {
  it('should be exists', () => {
    const select = findComponent(wrapper, 'select')
    expect(select.exists()).toBe(true)
  })
})
