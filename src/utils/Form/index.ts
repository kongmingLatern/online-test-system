import TeacherForm from './teacher'
import TaskForm from './task'
import StudentForm from './student'
import QuestionForm from './radio'
import ClassForm from './class'
import SubjectForm from './subject'
import TeacherAdd from './teacher_add'

// 表单配置组件 => FormItem.vue
const formConfig = {
  teacher: TeacherForm,
  task: TaskForm,
  student: StudentForm,
  question: QuestionForm,
  classList: ClassForm,
  list: SubjectForm,
  teacherAdd: TeacherAdd,
}

export { formConfig }
