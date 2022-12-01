import { defineStore } from 'pinia'
import http from '../api/http'
import Checkbox from '../utils/Task/Checkbox'
import Judge from '../utils/Task/Judge'
import Radio from '../utils/Task/Radio'

const requestPath = '/question/page'

const addQuestionPath = '/question/add'

export const useQuestion = defineStore('question', {
  state: () => ({
    question: [] as QuestionType[],
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
        this.question = []
        res.data.records.forEach(record => {
          const {
            questionId,
            questionList,
            questionAnswer,
            questionCorrect,
            baseId,
            baseTitle,
          } = record
          if (questionType === 1) {
            this.question.push(
              new Radio(
                questionId,
                baseId,
                baseTitle,
                questionList,
                questionAnswer,
                questionCorrect
              )
            )
          } else if (questionType === 2) {
            this.question.push(
              new Checkbox(
                questionId,
                baseId,
                baseTitle,
                questionList,
                questionAnswer,
                questionCorrect
              )
            )
          } else if (questionType === 3) {
            this.question.push(
              new Judge(
                questionId,
                baseId,
                baseTitle,
                questionList,
                questionCorrect
              )
            )
          }
        })

        return [this.question, res.data.total]
      } catch (error) {
        // 让表单组件显示错误
        return [this.question, 0]
      }
    },
    async deleteQuestion(questionId: string) {
      try {
        const res = await http.delete('/question/delete', {
          params: {
            questionId,
          },
        })
        return res.data
      } catch (e) {
        return '删除失败'
      }
    },
    async addQuestion(question: any) {
      try {
        const res = await http.post(
          addQuestionPath,
          question
        )
        return res.data
      } catch (e) {
        return '添加失败'
      }
    },
  },
})
