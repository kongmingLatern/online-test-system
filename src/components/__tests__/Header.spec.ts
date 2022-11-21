import { findComponent } from '@/utils';
import { mount } from '@vue/test-utils';
import Header from '../Header.vue';

describe('Header', () => {
  it('we should have a Header component', () => {
    const header = findComponent(Header, "header")
    expect(header.exists()).toBe(true)
  })
  it('we should have a h1 tag', () => {
    const title = findComponent(Header, "title")
    expect(title.exists()).toBe(true)
  })
});
