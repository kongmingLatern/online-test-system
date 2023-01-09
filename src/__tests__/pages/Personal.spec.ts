import { findComponent, registGlobalComponent } from '@/utils';
import Personal from '@/pages/home/Personal.vue';
let wrapper;
beforeEach(() => {
  wrapper = registGlobalComponent(Personal);
});
describe('components shoule be exists', () => {
  it('shoule be existed', () => {
    const components = findComponent(wrapper, 'personal');
    expect(components.exists()).toBeTruthy();
  });
});
