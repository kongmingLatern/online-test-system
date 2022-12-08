import router from '@/router'
import type { Teacher } from '@/utils'
import { useTeacher } from '../stores/teacher.store'

export const finishForm = async (values: Teacher) => {
  const store = useTeacher()
  await store.addTeacher(values)
  router.go(0)
}
