import { findComponent, registGlobalComponent } from "@/utils";
import Layout from "@/components/Layout.vue";

vitest.mock("ant-design-vue");

let wrapper;

beforeEach(() => {
  wrapper = registGlobalComponent(Layout);
});
describe("Layout", () => {
  it("should have a Header component", () => {
    const header = findComponent(wrapper, "header");
    expect(header.exists()).toBe(true);
  });

  it("should have a Aside component", () => {
    const aside = findComponent(wrapper, "aside");
    expect(aside.exists()).toBe(true);
  });

  it("should have a Content component", () => {
    const content = findComponent(wrapper, "content");
    expect(content.exists()).toBe(true);
  });
});
