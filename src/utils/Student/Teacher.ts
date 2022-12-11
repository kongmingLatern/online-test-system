export default class Teacher {
  public teacherId: string
  public teacherNo: string
  public teacherName: string
  public isAuth: boolean
  constructor(
    teacherId: string,
    teacherNo: string,
    teacherName: string,
    isAuth: boolean = false
  ) {
    this.teacherId = teacherId
    this.teacherNo = teacherNo
    this.teacherName = teacherName
    this.isAuth = isAuth
  }
}
