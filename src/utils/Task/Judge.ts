import Task from './Task'
export default class Judge extends Task {
  public questionList: string
  public questionCorrect: string[]

  constructor(
    baseTitle: string,
    questionList: string,
    questionCorrect: string[]
  ) {
    super(baseTitle)
    this.questionList = questionList
    this.questionCorrect = questionCorrect
  }
}
