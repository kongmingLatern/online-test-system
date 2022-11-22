import { RegistGlobalComponent } from '../../utils/vueUtils';
import { findComponent } from "@/utils";
import Content from "@/views/admin/Content.vue"

let wrapper

beforeEach(() => {
  wrapper = RegistGlobalComponent(Content)
})

describe('Content slot', () => {
  it('shoule be have a header slot', () => {
    const header = findComponent(wrapper, 'header')
    expect(header.exists()).toBe(true)
  });
  it('shoule be have a nav slot', () => {
    const nav = findComponent(wrapper, 'nav')
    expect(nav.exists()).toBe(true)
  });
  it('shoule be have a main slot', () => {
    const main = findComponent(wrapper, 'main')
    expect(main.exists()).toBe(true)
  });
});