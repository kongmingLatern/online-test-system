import { findComponent, registGlobalComponent } from "@/utils";
import HomeIndex from "@/pages/home/HomeIndex.vue";
let wrapper;
beforeEach(() => {
  wrapper = registGlobalComponent(HomeIndex);
});
describe("components shoule be exists", () => {
  it("shoule be existed", () => {
    const components = findComponent(wrapper, "homeIndex");
    expect(components).toBeTruthy();
  });
});
