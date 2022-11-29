import { defineStore } from 'pinia'
import http from '../api/http'

const requestPath = '/subject/list'

export const useSubject = defineStore('subject', {
  state: () => ({
    subjectList: [] as any[],
  }),

  actions: {
    async getSubjectList() {
      try {
        const res = await http.get(requestPath)
        res.data.forEach(item => {
          this.subjectList.push(item)
        })
        return this.subjectList
      } catch (e) {
        return '科目获取失败'
      }
    },
  },
})
