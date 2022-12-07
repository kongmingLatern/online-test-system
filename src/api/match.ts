import { message } from 'ant-design-vue'
import { useMatch } from '../stores/match.store'

// NOTE:获取所有题库
export const addClassList = async (values: any) => {
  const store = useMatch()
  try {
    const [code, data] = await store.addClassMatch(
      values.classIdList,
      values.taskId
    )
    if (code === 1) {
      message.success(data)
    }
  } catch (e: any) {
    message.error(e)
  }
}
