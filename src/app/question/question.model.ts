import { Answer } from '../answer/answer.model'

export class Question {
  _id?: string
  title: string
  description: string
  createdAt?: Date
  icon?: string
  answers: Answer[]

  constructor(title: string, description: string, createdAt?: Date, icon?: string, _id?: string) {
    this._id = _id
    this.title = title
    this.description = description
    this.createdAt = createdAt
    this.icon = icon
    this.answers = []
  }
}
