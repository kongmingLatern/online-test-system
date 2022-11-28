export default class Student {
  public studentId: string = ''
  public studentNo: string = ''
  public studentName: string = ''
  public classNo: string = ''

  constructor(
    studentId: string,
    studentNo: string,
    studentName: string,
    classNo: string
  ) {
    this.studentId = studentId
    this.studentNo = studentNo
    this.studentName = studentName
    this.classNo = classNo
  }
}
