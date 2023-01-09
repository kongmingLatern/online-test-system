import { mount, type DOMWrapper } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import { globalComponents } from '@/mock/ant-design-vue';
import type { DefineComponent } from 'vue';
import { createTestingPinia } from '@pinia/testing';

export function findComponent(
  wrapper: VueWrapper,
  element: string
): DOMWrapper<Element> {
  return wrapper.find(`[data-test=${element}]`);
}
export function findTag(wrapper: VueWrapper, tag: string): DOMWrapper<Element> {
  return wrapper.find(`${tag}`);
}
export function registGlobalComponent(
  component: DefineComponent<any, any, any, any>,
  options?: Record<string, any>
): VueWrapper<any> {
  return mount(component, {
    global: {
      components: globalComponents,
      // 如果是在文件中注册的组件,需要使用 stubs
      stubs: globalComponents,
      // 插件
      plugins: [createTestingPinia()]
    },
    ...options
  });
}
export function configComponent(
  component: DefineComponent<any, any, any, any>,
  testName: string,
  options?: Record<string, any>
): any {
  return mount(component, {
    global: {
      components: globalComponents,
      // 如果是在文件中注册的组件,需要使用 stubs
      stubs: globalComponents
    },
    ...options
  }).find(`[data-test=${testName}]`);
}
