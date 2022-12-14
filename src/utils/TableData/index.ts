import { columns as TaskColumn } from './Task.data';
import { columns as QuestionColumn } from './Question.data.';

import { columns as JudgeColumn } from './Judge.data';

import {
  uploadColumns as StudentUploadColumn,
  infoColumns as StudentInfoColumns
} from './Student.data';

import { columns as GradeColumn } from './Grade.data';
import { columns as SearchStudentPasswordColumn } from './SearchStudentPassword.data';
import { columns as TeacherColumn } from './Teacher.data';
import { columns as TaskInfoColumn } from './TaskInfoColumn.data';
import { columns as QueryGrade } from './QueryGrade.data';

const columnConfig = {
  studentUpload: StudentUploadColumn,
  studentInfo: StudentInfoColumns,
  question: QuestionColumn,
  judge: JudgeColumn,
  task: TaskColumn,
  grade: GradeColumn,
  queryGrade: QueryGrade,
  searchPassword: SearchStudentPasswordColumn,
  teacher: TeacherColumn,
  taskInfo: TaskInfoColumn
};

export { columnConfig };
