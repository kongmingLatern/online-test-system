import { findComponent, registGlobalComponent } from '@/utils';

import Card from '@/components/Card.vue';

let wrapper;

beforeEach(() => {
  wrapper = registGlobalComponent(Card);
});

describe('Card shoule be existed', () => {
  it('shoule be exists', () => {
    const card = findComponent(wrapper, 'card');
    expect(card.exists()).toBeTruthy();
  });
});
