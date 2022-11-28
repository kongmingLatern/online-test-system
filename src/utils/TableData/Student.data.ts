import type { TableColumnsOptions } from '@/type'
import { Column } from '../Task'

const options: Partial<TableColumnsOptions> = {
  align: 'center',
}

export const columns = [
  new Column('编号', 'no', 'no', options),
  new Column('学号', 'studentNo', 'studentNo', options),
  new Column('姓名', 'studentName', 'studentName', options),
  new Column('班级', 'classNo', 'classNo', options),
  new Column('操作', 'student', 'student', {
    width: 60,
    align: 'center',
  }),
]
