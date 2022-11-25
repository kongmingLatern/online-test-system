import { Student } from '@/utils'
import type { Ref } from 'vue'
import http from './http'
async function getDataByPage(
  requestPath: string,
  pageSize: number,
  currentPage: number = 1
) {
  return await http.get(requestPath, {
    params: {
      page: currentPage,
      pageSize,
    },
  })
}
export function getStudentData(
  data,
  pageSize: number,
  total: Ref<number | undefined>,
  currentPage: number = 1
) {
  return async function () {
    const res = await getDataByPage(
      'student/page',
      pageSize,
      currentPage
    )
    res.data.records.forEach(record => {
      const { studentNo, studentName, classNo } = record
      data.push(
        new Student(studentNo, studentName, classNo)
      )
    })
    total.value = res.data.total
  }
}
