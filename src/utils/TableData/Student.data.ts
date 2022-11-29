import type { TableColumnsOptions } from '@/type'

const options: Partial<TableColumnsOptions> = {
  align: 'center',
}

export const uploadColumns = [
  {
    title: '编号',
    dataIndex: 'no',
    ...options,
  },
  {
    title: '学号',
    dataIndex: 'studentNo',
    ...options,
  },
  {
    title: '姓名',
    dataIndex: 'studentName',
    ...options,
  },
  {
    title: '班级',
    dataIndex: 'classNo',
    ...options,
  },
  {
    title: '操作',
    dataIndex: 'delete',
    options: {
      ...options,
      width: 60,
    },
  },
]

export const infoColumns = [
  {
    title: '编号',
    dataIndex: 'no',
    ...options,
  },
  {
    title: '学号',
    dataIndex: 'studentNo',
    ...options,
  },
  {
    title: '姓名',
    dataIndex: 'studentName',
    ...options,
  },
  {
    title: '班级',
    dataIndex: 'classNo',
    ...options,
  },
  {
    title: '操作',
    dataIndex: 'student',
    options: {
      ...options,
      width: 60,
    },
  },
]
