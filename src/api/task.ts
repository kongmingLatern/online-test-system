import router from '@/router'
import { useTask } from '@/stores/task.store'
import { message } from 'ant-design-vue'

// NOTE:生成试卷
export const generateTask = async (values: any) => {
  const store = useTask()
  await store.addTask(values)
  router.go(0)
}
