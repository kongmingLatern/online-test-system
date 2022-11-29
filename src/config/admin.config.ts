import {
  JudgeColumn,
  QuestionColumn,
  StudentInfoColumns,
  StudentUploadColumn,
  TaskForm,
  TeacherForm,
  StudentForm,
  RadioForm,
  CheckboxForm,
  JudgeForm,
} from '@/utils'

export default {
  form: {
    teacher: TeacherForm,
    task: TaskForm,
    student: StudentForm,
    radio: RadioForm,
    checkbox: CheckboxForm,
    judge: JudgeForm,
  },
  column: {
    studentUpload: StudentUploadColumn,
    studentInfo: StudentInfoColumns,
    radio: QuestionColumn,
    checkbox: QuestionColumn,
    judge: JudgeColumn,
  },
}
