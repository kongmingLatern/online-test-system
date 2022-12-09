import {
  findComponent,
  registGlobalComponent,
} from '@/utils'
import Search from '@/components/Search.vue'

const wrapper = registGlobalComponent(Search as any)
describe('Search shoule be exists', () => {
  it('should be exists', () => {
    const search = findComponent(wrapper, 'search')
    expect(search.exists()).toBe(true)
  })
})
