import { findComponent, registGlobalComponent } from '@/utils';

import Carousel from '@/components/Carousel.vue';

let wrapper;

beforeEach(() => {
  wrapper = registGlobalComponent(Carousel);
});

describe('Card shoule be existed', () => {
  it('shoule be exists', () => {
    const carousel = findComponent(wrapper, 'carousel');
    expect(carousel.exists()).toBeTruthy();
  });
});
