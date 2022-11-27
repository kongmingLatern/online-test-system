import { findComponent, registGlobalComponent } from '@/utils';
import { mount } from '@vue/test-utils';
import AdminAside from '@/components/admin/AdminAside.vue';

let wrapper = mount(AdminAside)

beforeEach(() => {
  wrapper = registGlobalComponent(AdminAside)
})

describe('AdminAside tab', () => {
  it('tab shoule have 学生信息上传', () => {
    const tab = findComponent(wrapper, "studentInfoUpload")
    expect(tab.text()).toBe('学生信息上传');
  });
  it('tab shoule have 学生信息管理', () => {
    const tab1 = findComponent(wrapper, "studentInfoManage")
    expect(tab1.text()).toBe('学生信息管理');
  });

  it('tab shoule have 试题库管理', () => {
    const tab = findComponent(wrapper, "taskBase")
    expect(tab.text()).toBe('试题库管理');
  });
  it('tab shoule have 单选题管理', () => {
    const tab1 = findComponent(wrapper, "radio")
    expect(tab1.text()).toBe('单选题管理');
  });
  it('tab shoule have 多选题管理', () => {
    const tab1 = findComponent(wrapper, "checkbox")
    expect(tab1.text()).toBe('多选题管理');
  });
  it('tab shoule have 学生信息管理', () => {
    const tab1 = findComponent(wrapper, "judge")
    expect(tab1.text()).toBe('判断题管理');
  });
});

describe('sub', () => {
  it('shoule have a sub called student', () => {
    const student = findComponent(wrapper, "student")
    expect(student.exists()).toBe(true)
  });
  it('shoule have a sub called question', () => {
    const task = findComponent(wrapper, "question")
    expect(task.exists()).toBe(true)
  });
  it('shoule have a sub called grade', () => {
    const grade = findComponent(wrapper, "grade")
    expect(grade.exists()).toBe(true)
  });
  it('shoule have a sub called task', () => {
    const grade = findComponent(wrapper, "task")
    expect(grade.exists()).toBe(true)
  });
})
