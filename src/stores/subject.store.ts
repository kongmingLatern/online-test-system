import { defineStore } from "pinia";
import http from "../api/http";

const requestPath = "/subject/list";

export const useSubject = defineStore("subject", {
  state: () => ({
    subjectList: [] as any[],
  }),

  actions: {
    async getSubjectList() {
      try {
        const res = await http.get(requestPath);
        res.data.forEach((item) => {
          const { subjectId, subjectName } = item;
          this.subjectList.push({
            subjectId,
            subjectName,
          });
        });
        return [this.subjectList, "获取成功"];
      } catch (e) {
        return [[], "科目获取失败"];
      }
    },
  },
});
