import { defineStore } from 'pinia'
import http from '@/api/http'

export const useMatch = defineStore('match', {
  state: () => ({
    matchData: [] as any[],
  }),

  actions: {
    // 分页查询学生
    async getMatchsByPage(
      pageSize,
      currentPage,
      studentNo?
    ) {
      try {
        const res = await http.get(
          'match/getMatchPasswordPage',
          {
            params: {
              page: currentPage,
              pageSize,
              studentNo,
            },
          }
        )
        this.matchData = []
        res.data.records.forEach(record => {
          this.matchData.push(record)
        })
        return [this.matchData, res.data.total]
      } catch (error) {
        // 让表单组件显示错误
        return [this.matchData, 0]
      }
    },
  },
})
