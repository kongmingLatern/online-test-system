export default class Teacher {
  public teacherNo: string;
  public teacherName: string;
  public isAuth: boolean;
  constructor(teacherNo: string, teacherName: string, isAuth: boolean = false) {
    this.teacherNo = teacherNo;
    this.teacherName = teacherName;
    this.isAuth = isAuth;
  }
}
