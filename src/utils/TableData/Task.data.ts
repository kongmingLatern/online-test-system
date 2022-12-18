export const columns = [
  {
    title: '试卷编号',
    dataIndex: 'no',
    options: {
      ellipsis: true,
      align: 'center',
    },
  },
  {
    title: '题库名称',
    dataIndex: 'baseTitle',
    options: {
      ellipsis: true,
      align: 'center',
    },
  },
  {
    title: '所属科目',
    dataIndex: 'subjectName',
    options: {
      align: 'center',
      ellipsis: true,
    },
  },
  {
    title: '出题老师',
    dataIndex: 'teacherName',
    options: {
      align: 'center',
      ellipsis: true,
    },
  },
  {
    title: '操作',
    dataIndex: 'delete',
    options: {
      ellipsis: true,
      align: 'center',
      fixed: 'right',
    },
  },
]
