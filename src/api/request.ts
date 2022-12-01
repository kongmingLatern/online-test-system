import { useStudent } from '@/stores/student.store'
import { useQuestion } from '@/stores/question.store'
import { useTask } from '@/stores/task.store'
import { useMatch } from '@/stores/match.store'
import { useGrade } from '@/stores/grade.store'
import { useTeacher } from '@/stores/teacher.store'
import type {
  Teacher,
  Match,
  Task,
  Student,
  Grade,
  Radio,
  Checkbox,
  Judge,
} from '@/utils'
import type { Ref } from 'vue'
import { useBase } from '@/stores/base.store'
export async function getStudentDataByCurrentPage(
  data: Student[],
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
  data: Radio[] | Checkbox[] | Judge[],
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
  data: Grade[],
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
    isLoading.value = false
    totalPage.value = total
    return data
  } catch (error) {
    return false
  }
}

export async function getTeachersByCurrentPage(
  data: Teacher[],
  currentPage,
  pageSize,
  totalPage: Ref<number | undefined>,
  isLoading: Ref<boolean | undefined>,
  teacherNo?
) {
  try {
    const store = useTeacher()
    isLoading.value = true
    const [res, total] = await store.getTeachersByPage(
      pageSize,
      currentPage,
      teacherNo
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

export async function getBasesByCurrentPage(
  data: any[],
  currentPage,
  pageSize,
  totalPage: Ref<number | undefined>,
  isLoading: Ref<boolean | undefined>,
  subjectId?
) {
  try {
    const store = useBase()
    isLoading.value = true
    const [res, total] = await store.getBasesByCurrentPage(
      pageSize,
      currentPage,
      subjectId
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

export async function getMatchsByCurrentPage(
  data: Match[],
  currentPage,
  pageSize,
  totalPage: Ref<number | undefined>,
  isLoading: Ref<boolean | undefined>,
  studentNo?
) {
  try {
    const store = useMatch()
    isLoading.value = true
    const [res, total] = await store.getMatchsByPage(
      pageSize,
      currentPage,
      studentNo
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

export async function getTasksByCurrentPage(
  data: Radio[] | Checkbox[] | Judge[],
  currentPage,
  pageSize,
  totalPage: Ref<number | undefined>,
  isLoading: Ref<boolean | undefined>,
  taskName?: string
) {
  try {
    const store = useTask()
    isLoading.value = true
    const [res, total] = await store.getTasksByCurrentPage(
      pageSize,
      currentPage,
      taskName
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
