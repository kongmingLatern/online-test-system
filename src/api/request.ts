import { Student } from '@/utils'
import type { Ref } from 'vue'
import http from './http'
import { useStudent } from '../stores/student.store'
import { useQuestion } from '@/stores/question.store'
export async function getStudentDataByCurrentPage(
  data,
  currentPage,
  pageSize,
  totalPage: Ref<number | undefined>
) {
  try {
    const store = useStudent()
    const [res, total] = await store.getStudentsByPage(
      pageSize,
      currentPage
    )

    res.forEach(item => {
      data.push(item)
    })

    totalPage.value = total
    return true
  } catch (error) {
    return false
  }
}

export async function getQuestionByCurrentPage(
  data,
  currentPage,
  pageSize,
  totalPage: Ref<number | undefined>,
  questionType
) {
  try {
    const store = useQuestion()
    const [res, total] =
      await store.getQuestionByCurrentPage(
        pageSize,
        currentPage,
        questionType
      )

    res.forEach(item => {
      data.push(item)
    })

    totalPage.value = total
    return true
  } catch (error) {
    return false
  }
}
