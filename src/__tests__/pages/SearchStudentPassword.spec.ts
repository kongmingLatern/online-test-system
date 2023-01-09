import Header from '@/components/Header.vue';
import { findComponent, registGlobalComponent } from '@/utils';
import SearchStudentPassword from '@/pages/admin/SearchStudentPassword.vue';

vitest.mock('ant-design-vue');

const options = {
  props: {
    text: ''
  }
};

let wrapper;

beforeEach(() => {
  wrapper = registGlobalComponent(SearchStudentPassword, options);
});
describe('component shoule be exists', () => {
  it('we should have a Nav component', () => {
    const searchStudentPasswordNav = findComponent(
      wrapper,
      'searchStudentPasswordNav'
    );
    expect(searchStudentPasswordNav.exists()).toBe(true);
  });
  it('we should have a Content component', () => {
    const searchStudentPasswordContent = findComponent(
      wrapper,
      'searchStudentPasswordContent'
    );
    expect(searchStudentPasswordContent.exists()).toBe(true);
  });
  it('we should have a Content component', () => {
    const searchStudentPasswordMain = findComponent(
      wrapper,
      'searchStudentPasswordMain'
    );
    expect(searchStudentPasswordMain.exists()).toBe(true);
  });
});

describe('compoent props text', () => {
  it('header text', () => {
    const options = {
      props: {
        text: '查询考生密码'
      }
    };
    const header = registGlobalComponent(Header, options);
    expect(header.find('h1').text()).toEqual('查询考生密码');
  });
});
