import type { TableColumnsOptions } from '@/type'
import { Column, Task } from '../Task'

const options: Partial<TableColumnsOptions> = {
  align: 'center',
}
export const columns = [
  new Column('试卷编号', 'no', 'no', {
    ...options,
    width: 90,
  }),
  new Column('题库名称', 'baseTitle', 'baseTitle', options),
  new Column(
    '所属科目',
    'subjectName',
    'subjectName',
    options
  ),
  new Column(
    '出题老师',
    'teacherName',
    'teacherName',
    options
  ),
  new Column('查看详情', 'detail', 'detail', options),
  new Column('操作', 'delete', 'delete', {
    width: 60,
    align: 'center',
  }),
]
