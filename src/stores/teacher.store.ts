import { defineStore } from 'pinia'
import http from '../api/http'

import { Teacher } from '@/utils'
import { message } from 'ant-design-vue'
export const useTeacher = defineStore('teachers', {
  state: () => ({
    teacherData: [] as Teacher[],
  }),

  actions: {
    async getTeachersByPage(
      pageSize,
      currentPage,
      teacherNo?
    ) {
      try {
        const res = await http.get('teacher/page', {
          params: {
            page: currentPage,
            pageSize,
            teacherNo,
          },
        })
        this.teacherData = []
        res.data.records.forEach(record => {
          const { teacherNo, teacherName, isAuth } = record

          this.teacherData.push(
            new Teacher(teacherNo, teacherName, isAuth)
          )
        })
        return [this.teacherData, res.data.total]
      } catch (error) {
        // 让表单组件显示错误
        return [this.teacherData, 0]
      }
    },
    async addTeacher(values: Teacher) {
      try {
        const res: any = await http.post(
          'teacher/add',
          values
        )
        if (res.code === 1) {
          message.success('添加成功')
        }
      } catch (error) {
        message.success('添加失败')
      }
    },
  },
})
