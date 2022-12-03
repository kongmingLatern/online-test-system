import Header from "@/components/Header.vue";
import ProctorManage from "@/pages/admin/ProctorManage.vue";
import { findComponent, registGlobalComponent } from "@/utils";

vitest.mock("ant-design-vue");

const options = {
  props: {
    text: "",
  },
};

let wrapper;

beforeEach(() => {
  wrapper = registGlobalComponent(ProctorManage, options);
});
describe("component shoule be exists", () => {
  it("we should have a Nav component", () => {
    const proctorNav = findComponent(wrapper, "proctorNav");
    expect(proctorNav.exists()).toBe(true);
  });
  it("we should have a Content component", () => {
    const proctorContent = findComponent(wrapper, "proctorContent");
    expect(proctorContent.exists()).toBe(true);
  });
  it("we should have a Content component", () => {
    const proctorMain = findComponent(wrapper, "proctorMain");
    expect(proctorMain.exists()).toBe(true);
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
        text: "批准继续考试",
      },
    };
    const header = registGlobalComponent(Header, options);
    expect(header.find("h1").text()).toEqual("批准继续考试");
  });
});
