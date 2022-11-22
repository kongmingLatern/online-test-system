import type { DOMWrapper } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';

export function findComponent(wrapper: VueWrapper, element: string): DOMWrapper<Element> {
  return wrapper.find(`[data-test=${element}]`)
}
export function findTag(wrapper: VueWrapper, tag: string): DOMWrapper<Element> {
  return wrapper.find(`${tag}`)
}