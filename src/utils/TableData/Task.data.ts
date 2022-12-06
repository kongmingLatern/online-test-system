export const columns = [
  {
    title: "试卷编号",
    dataIndex: "no",
    options: {
      width: 90,
      align: "center",
    },
  },
  {
    title: "题库名称",
    dataIndex: "baseTitle",
    options: {
      ellipsis: true,
      align: "center",
    },
  },
  {
    title: "所属科目",
    dataIndex: "subjectName",
    options: {
      align: "center",
    },
  },
  {
    title: "出题老师",
    dataIndex: "teacherName",
    options: {
      align: "center",
    },
  },
  {
    title: "查看详情",
    dataIndex: "detail",
    options: {
      align: "center",
    },
  },
  {
    title: "操作",
    dataIndex: "delete",
    options: {
      width: 100,
      align: "center",
    },
  },
];
