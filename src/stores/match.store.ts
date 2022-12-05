import { defineStore } from 'pinia'
import http from '@/api/http'

const getMatchPasswordPagePath =
  '/match/getMatchPasswordPage'

const getGradePagePath = '/match/getGradePage'

const addClassMatchPath = '/match/addClassMatch'

const startMatchPath = '/match/startMatch'

const saveMatchPath = '/match/saveMatch'

const getMatchPath = '/match/getMatch'

const submitPath = '/match/submit'

const getSelfMatchPath = '/match/getSelfMatch'

const getSelfGradePath = '/match/getSelfGrade'

export const useMatch = defineStore('match', {
  state: () => ({
    matchData: [] as any[],
    gradeData: [] as any[],
  }),

  actions: {
    // NOTE: 分页查询考生密码
    async getMatchsByPage(
      pageSize,
      currentPage,
      studentNo?
    ) {
      try {
        const res = await http.get(
          getMatchPasswordPagePath,
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
    // NOTE: 分页获取学生成绩
    async getGradePagePath(
      pageSize,
      currentPage,
      studentNo?
    ) {
      try {
        const res = await http.get(getGradePagePath, {
          params: {
            page: currentPage,
            pageSize,
            studentNo,
          },
        })
        this.gradeData = []
        res.data.records.forEach(record => {
          this.gradeData.push(record)
        })
        return [this.gradeData, res.data.total]
      } catch (error) {
        // 让表单组件显示错误
        return [this.gradeData, 0]
      }
    },
    // NOTE: 为班级添加考试
    async addClassMatch(
      classIdList: any[],
      taskId: string
    ) {
      try {
        const res = await http.post(addClassMatchPath, {
          classIdList,
          taskId,
        })
        return res.data
      } catch (error) {
        return '添加失败'
      }
    },
    // NOTE: 开始考试[包含二次，三次登录...]
    // TODO: 二次登录，三次登录
    async startMatch(
      matchId: string,
      matchPassword: string,
      isFirst: boolean = true
    ) {
      try {
        let res
        if (isFirst) {
          // NOTE: 第一次开始考试
          res = await http.get(startMatchPath, {
            params: {
              matchId,
              matchPassword,
            },
          })
          console.log(res)
        } else {
          // NOTE: 二次+考试
          res = await http.get(getMatchPath, {
            params: {
              matchId,
              matchPassword,
            },
          })
        }
        return [res.data, res.map, res?.msg]
      } catch (error) {
        return '系统发生错误'
      }
    },
    // NOTE: 保存考试
    async saveMatch(
      matchId: string,
      questionDtoList: any[]
    ) {
      try {
        const res = await http.post(saveMatchPath, {
          matchId,
          questionDtoList,
        })
        return res.data
      } catch (error) {
        return '系统发生错误'
      }
    },
    // NOTE: 提交试卷
    async submit(matchId: string, questionDtoList: any[]) {
      try {
        const res = await http.post(submitPath, {
          matchId,
          questionDtoList,
        })
        return res.data
      } catch (error) {
        return '系统发生错误'
      }
    },
    // NOTE: 获取自己的考试
    async getSelfMatch() {
      try {
        const res = await http.get(getSelfMatchPath)
        return res.data
      } catch (error) {
        return '获取考试失败'
      }
    },
    // NOTE: 获取自己的考试成绩
    async getSelfGrade() {
      try {
        const res = await http.get(getSelfGradePath)
        return res.data
      } catch (error) {
        return '获取成绩失败'
      }
    },
  },
})
