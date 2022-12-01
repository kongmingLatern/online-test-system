import { Task } from '@/utils'
import { defineStore } from 'pinia'
import http from '../api/http'

const requestPath = '/base/page'

export const useTask = defineStore('question', {
  state: () => ({
    baseList: [] as any[],
  }),

  actions: {
    async getTaskByCurrentPage(
      pageSize,
      currentPage,
      subjectId?
    ) {
      try {
        const res = await http.get(requestPath, {
          params: {
            page: currentPage,
            pageSize,
            subjectId,
          },
        })
        this.baseList = []

        res.data.records.forEach(record => {
          const {
            subjectName,
            teacherName,
            createUser,
            baseTitle,
          } = record
          this.baseList.push({
            baseTitle,
            subjectName,
            teacherName,
            createUser,
          })
        })

        return [this.baseList, res.data.total]
      } catch (error) {
        // 让表单组件显示错误
        return [this.baseList, 0]
      }
    },
  },
})
