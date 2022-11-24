export default class Student {
  public sno: string = ''
  public name: string = ''
  public age: number = 0
  public cno: string = ''

  constructor(sno: string, name: string, age: number, cno: string) {
    this.sno = sno
    this.name = name
    this.age = age
    this.cno = cno
  }
}
