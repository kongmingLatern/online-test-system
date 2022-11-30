import router from '@/router'
import type {
  Checkbox,
  Judge,
  Radio,
  Student,
} from '@/utils'
import { message } from 'ant-design-vue'
import { useQuestion } from '../stores/question.store'

type QuestionType = Radio | Checkbox | Judge

export const removeQuestion = async (
  record: QuestionType
) => {
  const store = useQuestion()
  const { questionId } = record
  const res = await store.deleteQuestion(questionId)
  message.success(res)
  router.go(0)
}
export const finishQuestionForm = async (
  values: QuestionType
) => {
  const store = useQuestion()
  const msg = await store.addQuestion(values)
  message.success(msg)
}
