export const columns = [
  {
    title: '编号',
    dataIndex: 'no',
    options: {
      align: 'center',
      ellipsis: true,
    },
  },
  {
    title: '教工号',
    dataIndex: 'teacherNo',
    options: {
      align: 'center',
      ellipsis: true,
    },
  },
  {
    title: '教师姓名',
    dataIndex: 'teacherName',
    options: {
      align: 'center',
      ellipsis: true,
    },
  },
  {
    title: '是否有权限',
    dataIndex: 'isAuth',
    options: {
      align: 'center',
      ellipsis: true,
    },
  },
  {
    title: '操作',
    dataIndex: 'deleteAndAuth',
    options: {
      align: 'center',
      ellipsis: true,
      fixed: 'right',
    },
  },
]
