import type { DOMWrapper, VueWrapper } from '@vue/test-utils';
import { mount } from "@vue/test-utils";
import type { DefineComponent } from 'vue';

export function findComponent(componentName: DefineComponent<any, any, any, any>, element: string): DOMWrapper<Element> {
  return mount(componentName).find(`data-test=${element}`)
}