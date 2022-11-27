import { Student } from '../Student'
export default class Grade extends Student {
  public grade: number = 0
  public subjectName: string
  public baseTitle: string

  constructor(
    studentNo: string,
    classNo: string,
    studentName: string,
    subjectName: string,
    baseTitle: string,
    grade: number
  ) {
    super(studentNo, classNo, studentName)
    this.subjectName = subjectName
    this.baseTitle = baseTitle
    this.grade = grade
  }
}
