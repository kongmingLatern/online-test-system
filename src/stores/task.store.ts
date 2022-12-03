import { defineStore } from "pinia";
import http from "../api/http";

const getAllTaskPath = "/task/getAll";

export const useTask = defineStore("task", {
  state: () => ({
    taskData: [] as any[],
  }),

  actions: {
    async getTasksByCurrentPage(pageSize, currentPage, taskName?) {
      try {
        const res = await http.get(getAllTaskPath, {
          params: {
            page: currentPage,
            pageSize,
            taskName,
          },
        });
        this.taskData = [];
        res.data.records.forEach((record) => {
          const {
            taskTime,
            taskType,
            taskName,
            limitTime,
            taskStartToEnd,
            taskPeople,
          } = record;
          this.taskData.push({
            taskTime,
            taskType,
            taskName,
            limitTime,
            taskStartToEnd,
            taskPeople,
          });
        });
        return [this.taskData, res.data.total];
      } catch (e) {
        return "获取失败";
      }
    },
    async addTask(values) {
      try {
        const res: Record<string, any> = await http.post("/task/add", values);
        if (!res.msg) {
          return res.data;
        } else {
          return Promise.reject(res.msg);
        }
      } catch (error) {
        return error;
      }
    },
  },
});
