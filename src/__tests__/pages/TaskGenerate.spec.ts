import Header from "@/components/Header.vue";
import TaskGenerate from "@/pages/admin/TaskGenerate.vue";
import { findComponent, registGlobalComponent } from "@/utils";

vitest.mock("ant-design-vue");

const options = {
  props: {
    text: "",
  },
};

let wrapper;

beforeEach(() => {
  wrapper = registGlobalComponent(TaskGenerate, options);
});
describe("component shoule be exists", () => {
  it("we should have a Nav component", () => {
    const taskGenerateNav = findComponent(wrapper, "taskGenerateNav");
    expect(taskGenerateNav.exists()).toBe(true);
  });
  it("we should have a Content component", () => {
    const taskGenerateContent = findComponent(wrapper, "taskGenerateContent");
    expect(taskGenerateContent.exists()).toBe(true);
  });
  it("we should have a Content component", () => {
    const taskGenerateMain = findComponent(wrapper, "taskGenerateMain");
    expect(taskGenerateMain.exists()).toBe(true);
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
        text: "试卷生成",
      },
    };
    const header = registGlobalComponent(Header, options);
    expect(header.find("h1").text()).toEqual("试卷生成");
  });
});
