import { findComponent, findTag } from '@/utils';
import Header from '../Header.vue';

describe('Header', () => {
  it('we should have a Header component', () => {
    const header = findComponent(Header, "header")
    expect(header.exists()).toBe(true)
  })
  it('we should have a h1 tag', () => {
    const h1 = findTag(Header, "h1")
    expect(h1.exists()).toBe(true)
  })
  it('we should have a h1 tag', () => {
    const h1 = findTag(Header, "h1")
    expect(h1.text()).toEqual('在线考试系统');
  })
});
