import { RegistGlobalComponent } from '../../utils/vueUtils';
import { findComponent } from "@/utils";
import StudentContent from "@/views/admin/StudentContent.vue"

let wrapper

beforeEach(() => {
  wrapper = RegistGlobalComponent(StudentContent)
})

describe('StuedntContent', () => {
  it('shoule be have a header', () => {
    const header = findComponent(wrapper, 'header')
    expect(header.exists()).toBe(true)
  });
});