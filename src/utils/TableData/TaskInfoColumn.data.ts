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
    title: '考试名称',
    dataIndex: 'taskName',
    options: {
      align: 'center',
      ellipsis: true,
    },
  },
  {
    title: '考试时间',
    dataIndex: 'taskStartToEnd',
    options: {
      align: 'center',
      ellipsis: true,
    },
  },
  {
    title: '考试类型',
    dataIndex: 'taskType',
    options: {
      align: 'center',
      ellipsis: true,
    },
  },
  {
    title: '考试时间',
    dataIndex: 'limitTime',
    options: {
      align: 'center',
      ellipsis: true,
    },
  },
  {
    title: '当前考试人数',
    dataIndex: 'taskPeople',
    options: {
      align: 'center',
      ellipsis: true,
    },
  },
  {
    title: '操作',
    dataIndex: 'allocation',
    options: {
      ellipsis: true,
      align: 'center',
      fixed: 'right',
    },
  },
]
