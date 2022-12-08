import { defineStore } from 'pinia'
import http from '@/api/http'
import { message } from 'ant-design-vue'

const getBasePagePath = '/base/page'
const getBaseListPath = '/base/list'
const removeBasePath = '/base/delete'
const importPath = '/base/importBase'

export const useBase = defineStore('base', {
  state: () => ({
    bases: [] as any[],
    baseList: [] as any[],
    fileList: [] as any[],
  }),

  actions: {
    // NOTE:分页获取题库
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
    //NOTE: 获取所有题库列表
    async getBaseList(subjectId?: string) {
      try {
        const res = await http.get(getBaseListPath, {
          params: {
            subjectId,
          },
        })
        Object.assign(this.baseList, {}, res.data)
        return [this.baseList, '获取成功']
      } catch (e) {
        return [this.baseList, '题库获取失败']
      }
    },
    // NOTE: 删除题库
    async removeBase(baseId: string) {
      try {
        const res: any = await http.delete(removeBasePath, {
          params: {
            baseId,
          },
        })
        if (res.code === 1) {
          message.success('删除成功')
        }
      } catch (e) {
        // message.success('删除失败')
      }
    },
    // NOTE: 导入题库
    async importBase(values: any) {
      try {
        const res: any = await http.post(
          importPath,
          values,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        if (res.code === 1) {
          message.success('导入成功')
        }
      } catch (e) {
        // message.error('导入失败')
      }
    },
  },
})
