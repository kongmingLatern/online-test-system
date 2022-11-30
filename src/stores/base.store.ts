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
          this.baseList.push(item.baseTitle)
        })
        return [this.baseList, '获取成功']
      } catch (e) {
        return [this.baseList, '题库获取失败']
      }
    },
  },
})
