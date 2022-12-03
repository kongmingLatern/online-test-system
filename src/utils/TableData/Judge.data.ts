export const columns = [
  {
    title: "题目编号",
    dataIndex: "no",
    options: {
      width: 50,
      align: "center",
    },
  },
  {
    title: "题目",
    dataIndex: "questionList",
    options: {
      width: 200,
      ellipsis: true,
      align: "center",
    },
  },
  {
    title: "答案",
    dataIndex: "questionCorrect",
    options: {
      width: 50,
      ellipsis: true,
      align: "center",
    },
  },
  {
    title: "所属试题名称",
    dataIndex: "baseTitle",
    options: {
      width: 100,
      align: "center",
    },
  },
  {
    title: "操作",
    dataIndex: "delete",
    options: {
      width: 50,
      align: "center",
    },
  },
];
