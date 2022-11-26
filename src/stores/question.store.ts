import { defineStore } from 'pinia'
import http from '../api/http'
import Checkbox from '../utils/Task/Checkbox'
import Judge from '../utils/Task/Judge'
import Radio from '../utils/Task/Radio'

const requestPath = '/question/page'

export const useQuestion = defineStore('question', {
  state: () => ({
    question: [] as Radio[] | Checkbox[] | Judge[],
  }),

  actions: {
    async getQuestionByCurrentPage(
      pageSize,
      currentPage,
      questionType,
      baseId?,
      searchQuestionList?
    ) {
      try {
        const res = await http.get(requestPath, {
          params: {
            page: currentPage,
            pageSize,
            questionType,
          },
        })
        res.data.records.forEach(record => {
          const {
            questionList,
            questionAnswer,
            questionCorrect,
            baseTitle,
          } = record
          if (questionType === 1) {
            this.question.push(
              new Radio(
                baseTitle,
                questionList,
                questionAnswer,
                questionCorrect
              )
            )
          } else if (questionType === 2) {
            this.question.push(
              new Checkbox(
                baseTitle,
                questionList,
                questionAnswer,
                questionCorrect
              )
            )
          } else if (questionType === 3) {
            this.question.push(
              new Judge(
                baseTitle,
                questionList,
                questionCorrect
              ) as any
            )
          }
        })
        return [this.question, res.data.total]
      } catch (error) {
        // 让表单组件显示错误
        return [this.question, 0]
      }
    },
  },
})
