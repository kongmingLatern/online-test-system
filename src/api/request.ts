import { useStudent } from '../stores/student.store'
import { useQuestion } from '@/stores/question.store'
import type { Ref } from 'vue'
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

    Object.assign(data, res)

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
  questionType,
  isLoading: Ref<boolean | undefined>
) {
  try {
    const store = useQuestion()
    isLoading.value = true
    const [res, total] =
      await store.getQuestionByCurrentPage(
        pageSize,
        currentPage,
        questionType
      )
    data.length = 0
    Object.assign(data, res)
    isLoading.value = false
    totalPage.value = total
    return data
  } catch (error) {
    return false
  }
}
