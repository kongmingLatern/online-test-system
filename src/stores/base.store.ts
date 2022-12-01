import { defineStore } from 'pinia'
import http from '../api/http'

const getBaseListPath = '/base/list'

const getBasePagePath = '/base/page'

export const useBase = defineStore('base', {
  state: () => ({
    bases: [] as any[],
    baseList: [] as any[],
  }),

  actions: {
    async getBasesByCurrentPage(
      pageSize,
      currentPage,
      subjectId?
    ) {
      try {
        const res = await http.get(getBasePagePath, {
          params: {
            page: currentPage,
            pageSize,
            subjectId,
          },
        })
        this.bases = []

        res.data.records.forEach(record => {
          const {
            baseId,
            subjectName,
            teacherName,
            createUser,
            baseTitle,
          } = record
          this.bases.push({
            baseId,
            baseTitle,
            subjectName,
            teacherName,
            createUser,
          })
        })

        return [this.bases, res.data.total]
      } catch (error) {
        // 让表单组件显示错误
        return [this.baseList, 0]
      }
    },
    async getBaseList(subjectId: string) {
      try {
        const res = await http.get(getBaseListPath, {
          params: {
            subjectId,
          },
        })
        res.data.forEach(item => {
          this.baseList.push(item)
        })
        return [this.baseList, '获取成功']
      } catch (e) {
        return [this.baseList, '题库获取失败']
      }
    },
  },
})
