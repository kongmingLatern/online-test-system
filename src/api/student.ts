import router from '@/router'
import { useStudent } from '@/stores/student.store'
import type { Student } from '@/utils'
import { message } from 'ant-design-vue'

export const removeStudent = async (record: Student) => {
  const store = useStudent()
  const { studentId } = record
  const res = await store.deleteStudent(studentId)
  message.success(res)
  router.go(0)
}
export const finishForm = async (values: Student) => {
  const store = useStudent()
  const msg = await store.addStudent(values)
  message.success(msg)
}
