import { useTask } from '@/stores/task.store'
import { message } from 'ant-design-vue'

export const generateTask = async (values: any) => {
  const store = useTask()
  try {
    const msg = await store.addTask(values)
    message.success(msg)
  } catch (e: any) {
    message.error(e)
  }
}