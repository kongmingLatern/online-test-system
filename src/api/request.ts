import { useStudent } from '../stores/student.store'
import { useQuestion } from '@/stores/question.store'
import type { Ref } from 'vue'
import { useGrade } from '@/stores/grade.store'
export async function getStudentDataByCurrentPage(
  data,
  currentPage,
  pageSize,
  totalPage: Ref<number | undefined>,
  isLoading: Ref<boolean | undefined>
) {
  try {
    const store = useStudent()
    isLoading.value = true
    const [res, total] = await store.getStudentsByPage(
      pageSize,
      currentPage
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

export async function getGradeByCurrentPage(
  data,
  currentPage,
  pageSize,
  totalPage: Ref<number | undefined>,
  isLoading: Ref<boolean | undefined>,
  studentNo?
) {
  try {
    const store = useGrade()
    isLoading.value = true
    const [res, total] = await store.getGradeByCurrentPage(
      pageSize,
      currentPage,
      studentNo
    )
    data.length = 0
    Object.assign(data, res)
    console.log(data)
    isLoading.value = false
    totalPage.value = total
    return data
  } catch (error) {
    return false
  }
}
