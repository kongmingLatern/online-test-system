import type { TableColumnsOptions } from '@/type'
import { Column } from '../Task'

const options: Partial<TableColumnsOptions> = {
  align: 'center',
}

export const columns = [
  new Column('编号', 'no', 'no', options),
  new Column('教工号', 'teacherNo', 'teacherNo', options),
  new Column(
    '教师姓名',
    'teacherName',
    'teacherName',
    options
  ),
  new Column('操作', 'deleteAndAuth', 'deleteAndAuth', {
    width: 60,
    align: 'center',
  }),
]
