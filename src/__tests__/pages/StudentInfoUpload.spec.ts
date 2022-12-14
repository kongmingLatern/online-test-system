import Header from '@/components/Header.vue';
import { findComponent, registGlobalComponent } from '@/utils';
import StudentInfoUpload from '@/pages/admin/StudentInfoUpload.vue';
import { setActivePinia, createPinia } from 'pinia';

vitest.mock('ant-design-vue');

const options = {
  props: {
    text: ''
  }
};

let wrapper;

beforeEach(() => {
  setActivePinia(createPinia());
  wrapper = registGlobalComponent(StudentInfoUpload, options);
});
describe('component shoule be exists', () => {
  it('we should have a Nav component', () => {
    const studentNav = findComponent(wrapper, 'studentNav');
    expect(studentNav.exists()).toBe(true);
  });
  it('we should have a Content component', () => {
    const studentContent = findComponent(wrapper, 'studentContent');
    expect(studentContent.exists()).toBe(true);
  });
  it('we should have a Content component', () => {
    const studentMain = findComponent(wrapper, 'studentMain');
    expect(studentMain.exists()).toBe(true);
  });
});

describe('content component', () => {
  it('shoule have a breadcrumb component', () => {
    const breadcrumb = findComponent(wrapper, 'breadcrumb');
    expect(breadcrumb.exists()).toBe(true);
  });
});
describe('compoent text', () => {
  it('header text', () => {
    const options = {
      props: {
        text: '学生信息上传'
      }
    };
    const header = registGlobalComponent(Header, options);
    expect(header.find('h1').text()).toEqual('学生信息上传');
  });
});
