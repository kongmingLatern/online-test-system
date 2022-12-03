import router from "@/router";
import type { Teacher } from "@/utils";
import { message } from "ant-design-vue";
import { useTeacher } from "../stores/teacher.store";

export const finishForm = async (values: Teacher) => {
  const store = useTeacher();
  const msg = await store.addTeacher(values);
  if (msg !== "添加失败") {
    message.success(msg);
    // router.go(0)
  } else {
    message.error(msg);
  }
};
