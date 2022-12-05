import { message } from 'ant-design-vue'
import { useMatch } from '../stores/match.store'

// NOTE:获取所有题库
export const addClassList = async (values: any) => {
  const store = useMatch()
  try {
    const [res, _] = await store.addClassMatch(
      values.classIdList,
      values.taskId
    )
    message.success('考试安排成功')
  } catch (e: any) {
    message.error(e)
  }
}
