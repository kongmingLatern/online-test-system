import Header from '@/components/Header.vue';
import TaskManage from '@/pages/admin/TaskManage.vue';
import { findComponent, registGlobalComponent } from '@/utils';

vitest.mock('ant-design-vue');

const options = {
  props: {
    text: ''
  }
};

let wrapper;

beforeEach(() => {
  wrapper = registGlobalComponent(TaskManage, options);
});
describe('component shoule be exists', () => {
  it('we should have a Nav component', () => {
    const taskNav = findComponent(wrapper, 'taskNav');
    expect(taskNav.exists()).toBe(true);
  });
  it('we should have a Content component', () => {
    const taskContent = findComponent(wrapper, 'taskContent');
    expect(taskContent.exists()).toBe(true);
  });
  it('we should have a Content component', () => {
    const taskMain = findComponent(wrapper, 'taskMain');
    expect(taskMain.exists()).toBe(true);
  });
});

describe('content component', () => {
  it('shoule have a breadcrumb component', () => {
    const breadcrumb = findComponent(wrapper, 'breadcrumb');
    expect(breadcrumb.exists()).toBe(true);
  });
});

describe('compoent props text', () => {
  it('header text', () => {
    const options = {
      props: {
        text: '试卷管理'
      }
    };
    const header = registGlobalComponent(Header, options);
    expect(header.find('h1').text()).toEqual('试卷管理');
  });
});
