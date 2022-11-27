import { findTag, registGlobalComponent } from '@/utils'
import { findComponent } from '@/utils'
import Form from '@/components/admin/Form.vue'

let wrapper

beforeEach(() => {
  wrapper = registGlobalComponent(Form)
})

describe('content shoule be exists', () => {
  it('should have a h3', () => {
    const h3 = findTag(wrapper, 'h3')
    expect(h3.exists()).toBe(true)
  })
})
