import { message } from 'ant-design-vue'
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
        Object.assign(this.subjectList, res.data)
        return [this.subjectList, '获取成功']
      } catch (e) {
        return [[], '科目获取失败']
      }
    },
    async addSubject(values: any) {
      try {
        const res: Record<string, any> = await http.post(
          '/subject/add',
          values
        )
        if (res.code == 1) {
          message.success('添加成功')
          return [res.data, '添加成功']
        } else {
          return [res.data, '添加失败']
        }
      } catch (e) {
        return [[], '添加失败']
      }
    },
  },
})
