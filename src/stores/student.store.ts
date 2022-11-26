import { Student } from '@/utils'
import { defineStore } from 'pinia'
import http from '../api/http'

export const useStudent = defineStore('students', {
  state: () => ({
    studentData: [] as Student[],
  }),

  actions: {
    async getStudentsByPage(pageSize, currentPage) {
      try {
        const res = await http.get('student/page', {
          params: {
            page: currentPage,
            pageSize,
          },
        })
        this.studentData = []
        res.data.records.forEach(record => {
          const { studentNo, studentName, classNo } = record
          this.studentData.push(
            new Student(studentNo, studentName, classNo)
          )
        })
        return [this.studentData, res.data.total]
      } catch (error) {
        // 让表单组件显示错误
        return [this.studentData, 0]
      }
    },
  },
})
