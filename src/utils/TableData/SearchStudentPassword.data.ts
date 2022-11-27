import type { TableColumnsOptions } from '@/type'
import { Column } from '../Task'

const options: Partial<TableColumnsOptions> = {
  align: 'center',
}
export const columns = [
  new Column('考试编号', 'no', 'no', {
    ...options,
    width: 100,
  }),
  new Column('考试科目', 'subjectName', 'subjectName', {
    ...options,
    ellipsis: true,
  }),
  new Column(
    '考试密码',
    'taskPassword',
    'taskPassword',
    options
  ),
  new Column('考试时间', 'taskTime', 'taskTime', {
    ...options,
    width: 150,
  }),
  new Column('班级', 'classNo', 'classNo', {
    ...options,
    width: 200,
  }),
  new Column('学号', 'studentNo', 'studentNo', {
    ...options,
    width: 200,
  }),
  new Column('姓名', 'studentName', 'studentName', {
    ...options,
    width: 200,
  }),
  new Column('考试状态', 'taskStutus', 'taskStutus', {
    ...options,
    width: 200,
  }),
]
