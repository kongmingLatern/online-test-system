import type { TableColumnsOptions } from '@/type'
import { Column, Judge } from '../Task'

const options: Partial<TableColumnsOptions> = {
  align: 'center',
}
export const columns = [
  new Column('题目编号', 'no', 'no', {
    ...options,
    width: 100,
  }),
  new Column(
    '题目',
    'questionList',
    'questionList',
    options
  ),
  new Column(
    '答案',
    'questionCorrect',
    'questionCorrect',
    options
  ),
  new Column('所属试题名称', 'baseTitle', 'baseTitle', {
    ...options,
    width: 200,
  }),
  new Column('操作', 'delete', 'delete', {
    width: 60,
    ...options,
  }),
]
