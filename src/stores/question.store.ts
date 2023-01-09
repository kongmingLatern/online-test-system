import { message } from 'ant-design-vue';
import { defineStore } from 'pinia';
import http from '../api/http';
import Checkbox from '../utils/Task/Checkbox';
import Judge from '../utils/Task/Judge';
import Radio from '../utils/Task/Radio';

const requestPath = '/question/page';

const addQuestionPath = '/question/add';

// type QuestionType = Radio[] | Checkbox[] | Judge[]

export const useQuestion = defineStore('question', {
  state: () => ({
    question: [] as any[]
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
            questionType
          }
        });
        this.question = [];
        res.data.records.forEach((record) => {
          const {
            questionId,
            questionList,
            questionAnswer,
            questionCorrect,
            baseId,
            baseTitle
          } = record;
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
            );
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
            );
          } else if (questionType === 3) {
            this.question.push(
              new Judge(
                questionId,
                baseId,
                baseTitle,
                questionList,
                questionCorrect
              )
            );
          }
        });

        return [this.question, res.data.total];
      } catch (error) {
        // 让表单组件显示错误
        return [this.question, 0];
      }
    },
    async deleteQuestion(questionId: string) {
      try {
        const res: any = await http.delete('/question/delete', {
          params: {
            questionId
          }
        });
        if (res.code === 1) {
          message.success('删除成功');
        }
      } catch (e) {
        message.error('删除失敗');
      }
    },
    async addQuestion(question: any) {
      try {
        const res: any = await http.post(addQuestionPath, question);
        if (res.code === 1) {
          message.success('添加成功');
        }
      } catch (e) {
        message.success('添加失败');
      }
    }
  }
});
