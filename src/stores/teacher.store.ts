import { defineStore } from "pinia";
import http from "../api/http";

import { Teacher } from "@/utils";
export const useTeacher = defineStore("teachers", {
  state: () => ({
    teacherData: [] as Teacher[],
  }),

  actions: {
    async getTeachersByPage(pageSize, currentPage, teacherNo?) {
      try {
        const res = await http.get("teacher/page", {
          params: {
            page: currentPage,
            pageSize,
            teacherNo,
          },
        });
        this.teacherData = [];
        res.data.records.forEach((record) => {
          const { teacherNo, teacherName } = record;

          this.teacherData.push(new Teacher(teacherNo, teacherName));
        });
        return [this.teacherData, res.data.total];
      } catch (error) {
        // 让表单组件显示错误
        return [this.teacherData, 0];
      }
    },
    async addTeacher(values: Teacher) {
      try {
        const res = await http.post("teacher/add", values);
        return res.data;
      } catch (error) {
        return "添加失败";
      }
    },
  },
});
