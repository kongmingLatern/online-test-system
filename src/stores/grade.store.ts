import { Grade } from '@/utils';
import { defineStore } from 'pinia';
import http from '../api/http';

export const useGrade = defineStore('grade', {
  state: () => ({
    gradeData: [] as Grade[]
  }),

  actions: {
    async getGradeByCurrentPage(pageSize, currentPage, studentNo?) {
      try {
        const res = await http.get('match/getGradePage', {
          params: {
            page: currentPage,
            pageSize,
            studentNo
          }
        });
        this.gradeData = [];
        res.data.records.forEach((record) => {
          const {
            studentNo,
            studentName,
            classNo,
            subjectName,
            baseTitle,
            grade
          } = record;
          this.gradeData.push(
            new Grade(
              studentNo,
              classNo,
              studentName,
              subjectName,
              baseTitle,
              grade
            )
          );
        });
        return [this.gradeData, res.data.total];
      } catch (error) {
        // 让表单组件显示错误
        return [this.gradeData, 0];
      }
    }
  }
});
