import type { TableColumnsOptions } from '@/type'
import { Column } from '../Task'

const options: Partial<TableColumnsOptions> = {
  align: 'center',
}

export const columns = [
  new Column('学号', 'studentNo', 'studentNo', options),
  new Column('班级', 'classNo', 'classNo', options),
  new Column('姓名', 'studentName', 'studentName', options),
  new Column('科目', 'subjectName', 'subjectName', options),
  new Column('所属试题名称', 'baseTitle', 'baseTitle', {
    ...options,
    width: 200,
  }),
  new Column('成绩', 'grade', 'grade', options),
  new Column('操作', 'delete', 'delete', {
    width: 60,
    align: 'center',
  }),
]
