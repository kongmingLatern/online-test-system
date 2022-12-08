import { Student } from '@/utils'
import { message } from 'ant-design-vue'
import { defineStore } from 'pinia'
import http from '../api/http'

export const useStudent = defineStore('students', {
  state: () => ({
    studentData: [] as Student[],
  }),

  actions: {
    // 分页查询学生
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
          const {
            studentId,
            studentNo,
            studentName,
            classNo,
          } = record
          this.studentData.push(
            new Student(
              studentId,
              studentNo,
              studentName,
              classNo
            )
          )
        })
        return [this.studentData, res.data.total]
      } catch (error) {
        // 让表单组件显示错误
        return [this.studentData, 0]
      }
    },
    async addStudent(student: Student) {
      try {
        const res: any = await http.post(
          'student/add',
          student
        )
        if (res.code === 1) {
          message.success('添加成功')
        }
      } catch (error) {
        message.success('添加失败')
      }
    },
    async deleteStudent(studentId: string) {
      try {
        const res: any = await http.delete(
          'student/delete',
          {
            params: {
              studentId,
            },
          }
        )
        if (res.code === 1) {
          message.success('删除成功')
        }
      } catch (error) {
        message.error('删除失败')
      }
    },
    async importStudent(file: File) {
      try {
        const res: any = await http.post(
          'student/importStudent',
          { file },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        if (res.code === 1) {
          message.success(res.data)
        }
      } catch (e: any) {
        return e
      }
    },
  },
})
