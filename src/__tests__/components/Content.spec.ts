import { registGlobalComponent } from "@/utils";
import { findComponent } from "@/utils";
import Content from "@/components/Content.vue";

let wrapper;

beforeEach(() => {
  wrapper = registGlobalComponent(Content);
});

describe("Content slot", () => {
  it("shoule be have a header slot", () => {
    const header = findComponent(wrapper, "header");
    expect(header.exists()).toBe(true);
  });
  it("shoule be have a nav slot", () => {
    const nav = findComponent(wrapper, "nav");
    expect(nav.exists()).toBe(true);
  });
  it("shoule be have a main slot", () => {
    const main = findComponent(wrapper, "main");
    expect(main.exists()).toBe(true);
  });
});
