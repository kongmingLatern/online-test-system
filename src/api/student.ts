import router from '@/router'
import { useStudent } from '@/stores/student.store'
import type { Student } from '@/utils'
import { message } from 'ant-design-vue'

// NOTE: 删除学生
export const removeStudent = async (record: Student) => {
  const store = useStudent()
  const { studentId } = record
  const res = await store.deleteStudent(studentId)
  message.success(res)
  router.go(0)
}
// NOTE: 添加学生(表单)
export const finishForm = async (values: Student) => {
  const store = useStudent()
  const msg = await store.addStudent(values)
  message.success(msg)
}
