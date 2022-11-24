import Task from './Task'
export default class Radio extends Task {
  public questionList: string
  public questionAnswer: string[]
  public questionCorrect: string[]

  constructor(
    baseTitle: string,
    questionList: string,
    questionAnswer: string[],
    questionCorrect: string[]
  ) {
    super(baseTitle)
    this.questionList = questionList
    this.questionAnswer = questionAnswer
    this.questionCorrect = questionCorrect
  }
}
