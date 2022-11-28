export default {
  form: {
    teacher: {
      teacherNo: {
        name: 'teacherNo',
        type: 'text',
        label: '教工号',
      },
      teacherName: {
        name: 'teacherName',
        type: 'text',
        label: '教师姓名',
      },
      isAuth: {
        name: 'isAuth',
        type: 'number',
        label: '是否授权',
      },
    },
    task: {
      subjectName: {
        name: 'subjectName',
        type: 'text',
        label: '科目名称',
      },
      baseTitle: {
        name: 'baseTitle',
        type: 'text',
        label: '题库名称',
      },
      baseName: {
        name: 'baseName',
        type: 'text',
        label: '题目名称',
      },
      taskTerm: {
        name: 'taskTerm',
        type: 'text',
        label: '考试学期',
      },
      taskTime: {
        name: 'taskTime',
        type: 'number',
        label: '考试时间',
      },
    },
    student: {
      studentNo: {
        name: 'studentNo',
        type: 'text',
        label: '学号',
      },
      studentName: {
        name: 'studentName',
        type: 'text',
        label: '学生姓名',
      },
      classNo: {
        name: 'classNo',
        type: 'text',
        label: '班级号',
      },
    },
    radio: {
      radioName: {
        name: 'radioName',
        type: 'text',
        label: '单选题名称',
      },
      radioAnswer: {
        name: 'radioAnswer',
        type: 'text',
        label: '单选题答案',
      },
      radioScore: {
        name: 'radioScore',
        type: 'number',
        label: '单选题分数',
      },
      baseTitle: {
        name: 'baseTitle',
        type: 'text',
        label: '题库名称',
      },
    },
    checkbox: {
      checkboxName: {
        name: 'checkboxName',
        type: 'text',
        label: '多选题名称',
      },
      checkboxAnswer: {
        name: 'checkboxAnswer',
        type: 'text',
        label: '多选题答案',
      },
      checkboxScore: {
        name: 'checkboxScore',
        type: 'number',
        label: '多选题分数',
      },
      baseTitle: {
        name: 'baseTitle',
        type: 'text',
        label: '题库名称',
      },
    },
    judge: {
      judgeName: {
        name: 'judgeName',
        type: 'text',
        label: '判断题名称',
      },
      judgeAnswer: {
        name: 'judgeAnswer',
        type: 'text',
        label: '判断题答案',
      },
      judgeScore: {
        name: 'judgeScore',
        type: 'number',
        label: '判断题分数',
      },
      baseTitle: {
        name: 'baseTitle',
        type: 'text',
        label: '题库名称',
      },
    },
  },
  column: {
    judge: [
      {
        name: '题目编号',
        dataIndex: 'no',
        options: {
          width: 100,
          align: 'center',
        },
      },
      {
        name: '题目',
        dataIndex: 'questionList',
        options: {
          ellipsis: true,
          align: 'center',
        },
      },
    ],
  },
}
