import { message } from 'ant-design-vue'
import { defineStore } from 'pinia'
import http from '../api/http'

const getAllTaskPath = '/task/getAll'

export const useTask = defineStore('task', {
  state: () => ({
    taskData: [] as any[],
  }),

  actions: {
    // NOTE: 分页查询所有试卷
    async getTasksByCurrentPage(
      pageSize,
      currentPage,
      taskName?
    ) {
      try {
        const res = await http.get(getAllTaskPath, {
          params: {
            page: currentPage,
            pageSize,
            taskName,
          },
        })
        this.taskData = []
        res.data.records.forEach(record => {
          const {
            taskId,
            taskTime,
            taskType,
            taskName,
            limitTime,
            taskStartToEnd,
            taskPeople,
          } = record
          this.taskData.push({
            taskId,
            taskTime,
            taskType,
            taskName,
            limitTime,
            taskStartToEnd,
            taskPeople,
          })
        })
        return [this.taskData, res.data.total]
      } catch (e) {
        return '获取失败'
      }
    },
    // NOTE: 添加试卷
    async addTask(values) {
      try {
        const res: Record<string, any> = await http.post(
          '/task/add',
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
