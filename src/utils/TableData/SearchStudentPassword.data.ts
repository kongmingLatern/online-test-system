// import type { TableColumnsOptions } from '@/type'
// import { Column } from '../Task'

// const options: Partial<TableColumnsOptions> = {
//   align: 'center',
// }
// export const columns = [
//   new Column('考试编号', 'no', 'no', {
//     ...options,
//     width: 100,
//   }),
//   new Column('考试科目', 'subjectName', 'subjectName', {
//     ...options,
//     ellipsis: true,
//   }),
//   new Column(
//     '考试密码',
//     'taskPassword',
//     'taskPassword',
//     options
//   ),
//   new Column('考试时间', 'taskTime', 'taskTime', {
//     ...options,
//     width: 150,
//   }),
//   new Column('班级', 'classNo', 'classNo', {
//     ...options,
//     width: 200,
//   }),
//   new Column('学号', 'studentNo', 'studentNo', {
//     ...options,
//     width: 200,
//   }),
//   new Column('姓名', 'studentName', 'studentName', {
//     ...options,
//     width: 200,
//   }),
//   new Column('考试状态', 'taskStutus', 'taskStutus', {
//     ...options,
//     width: 200,
//   }),
// ]
export const columns = [
  {
    title: '考试编号',
    dataIndex: 'no',
    options: {
      align: 'center',
      width: 100,
    },
  },
  {
    title: '考试科目',
    dataIndex: 'subjectName',
    options: {
      align: 'center',
      ellipsis: true,
    },
  },
  {
    title: '考试密码',
    dataIndex: 'taskPassword',
    options: {
      align: 'center',
    },
  },
  {
    title: '考试时间',
    dataIndex: 'taskTime',
    options: {
      align: 'center',
      width: 150,
    },
  },
  {
    title: '班级',
    dataIndex: 'classNo',
    options: {
      align: 'center',
      width: 200,
    },
  },
  {
    title: '学号',
    dataIndex: 'studentNo',
    options: {
      align: 'center',
      width: 200,
    },
  },
  {
    title: '姓名',
    dataIndex: 'studentName',
    options: {
      align: 'center',
      width: 200,
    },
  },
  {
    title: '考试状态',
    dataIndex: 'taskStutus',
    options: {
      align: 'center',
      width: 200,
    },
  },
]
