import { defineStore } from 'pinia'
import http from '../api/http'

const requestPath = '/base/list'

export const useBase = defineStore('base', {
  state: () => ({
    baseList: [] as any[],
  }),

  actions: {
    async getBaseList(subjectId: string) {
      try {
        const res = await http.get(requestPath, {
          params: {
            subjectId,
          },
        })
        res.data.forEach(item => {
          this.baseList.push(item)
        })
        return this.baseList
      } catch (e) {
        return '题库获取失败'
      }
    },
  },
})
