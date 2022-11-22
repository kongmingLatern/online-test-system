import { findComponent, findTag, RegistGlobalComponent } from '@/utils';
import { mount } from '@vue/test-utils';
import Header from '../../components/Header.vue';

let wrapper = mount(Header)

const options = {
  props: {
    text: ''
  }
}

beforeEach(() => {
  wrapper = RegistGlobalComponent(Header, options)
})
describe('Header', () => {
  it('we should have a Header component', () => {
    const header = findComponent(wrapper, "header")
    expect(header.exists()).toBe(true)
  })
  it('we should have a h1 tag', () => {
    const h1 = findTag(wrapper, "h1")
    expect(h1.exists()).toBe(true)
  })
  it('we should have a h1 tag', () => {
    // const h1 = findTag(wrapper, "h1")
    const h1 = mount(Header, {
      props: {
        text: '在线考试系统'
      }
    }).find('h1')
    expect(h1.text()).toEqual('在线考试系统');
  })
});

describe('props', () => {
  it('should have text when we pass the text', () => {
    const header = mount(Header, {
      props: {
        text: 'hello'
      }
    })
    expect(header.props()).toEqual({
      text: 'hello'
    })
  });
});