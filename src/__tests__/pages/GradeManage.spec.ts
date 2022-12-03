import Header from "@/components/Header.vue";
import { findComponent, registGlobalComponent } from "@/utils";
import GradeManage from "@/pages/admin/GradeManage.vue";

vitest.mock("ant-design-vue");

const options = {
  props: {
    text: "",
  },
};

let wrapper;

beforeEach(() => {
  wrapper = registGlobalComponent(GradeManage, options);
});
describe("component shoule be exists", () => {
  it("we should have a Nav component", () => {
    const gradeNav = findComponent(wrapper, "gradeNav");
    expect(gradeNav.exists()).toBe(true);
  });
  it("we should have a Content component", () => {
    const gradeContent = findComponent(wrapper, "gradeContent");
    expect(gradeContent.exists()).toBe(true);
  });
  it("we should have a Content component", () => {
    const gradeMain = findComponent(wrapper, "gradeMain");
    expect(gradeMain.exists()).toBe(true);
  });
});

describe("content component", () => {
  it("shoule have a breadcrumb component", () => {
    const breadcrumb = findComponent(wrapper, "breadcrumb");
    expect(breadcrumb.exists()).toBe(true);
  });
});

describe("compoent props text", () => {
  it("header text", () => {
    const options = {
      props: {
        text: "成绩管理",
      },
    };
    const header = registGlobalComponent(Header, options);
    expect(header.find("h1").text()).toEqual("成绩管理");
  });
});
