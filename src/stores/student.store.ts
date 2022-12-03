import { Student } from "@/utils";
import { defineStore } from "pinia";
import http from "../api/http";

export const useStudent = defineStore("students", {
  state: () => ({
    studentData: [] as Student[],
  }),

  actions: {
    // 分页查询学生
    async getStudentsByPage(pageSize, currentPage) {
      try {
        const res = await http.get("student/page", {
          params: {
            page: currentPage,
            pageSize,
          },
        });
        this.studentData = [];
        res.data.records.forEach((record) => {
          const { studentId, studentNo, studentName, classNo } = record;
          this.studentData.push(
            new Student(studentId, studentNo, studentName, classNo)
          );
        });
        return [this.studentData, res.data.total];
      } catch (error) {
        // 让表单组件显示错误
        return [this.studentData, 0];
      }
    },
    async addStudent(student: Student) {
      try {
        const res = await http.post("student/add", student);
        return res.data;
      } catch (error) {
        return "添加失败";
      }
    },
    async deleteStudent(studentId: string) {
      try {
        const res = await http.delete("student/delete", {
          params: {
            studentId,
          },
        });
        return res.data;
      } catch (error) {
        return "删除失败";
      }
    },
  },
});
