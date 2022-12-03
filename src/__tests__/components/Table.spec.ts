import Table from "@/components/Table.vue";
import { findComponent, registGlobalComponent } from "../../utils/vueUtils";
// 注册全局组件
const wrapper = registGlobalComponent(Table);
let table;
beforeEach(() => {
  table = findComponent(wrapper, "table");
});

describe("first", () => {
  it("should be true", () => {
    expect(table.exists()).toBeTruthy();
  });
});
