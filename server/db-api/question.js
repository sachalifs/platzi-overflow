import Debug from 'debug'
import { Question } from '../models'
import { handleError } from '../utils'

const debug = new Debug('platzi-overflow:db-api:question')

export default {
  findAll: async() => {
    debug('Finding all questions')
    return await Question.find().populate('answers')
  },

  findById: async(id) => {
    debug(`Finding question with id ${id}`)
    return await Question
      .findOne({ _id: id })
      .populate('user')
      .populate({
        path: 'answers',
        options: { sort: '-createdAt' },
        populate: {
          path: 'user',
          model: 'User'
        }
      })
  },

  create: async(q) => {
    debug(`Creating new question: ${q}`)
    const question = new Question(q)
    await question.save()
    q.user.questions.push(question)
    q.user.save()
    return question
  },
  //
  // createAnswer: async(question, a) => {
  //   const answer = new Answer({ description, user, question})
  //   const savedAnswer = await answer.save()
  //   question.answers.push(savedAnswer)
  //   question.save()
  //   return savedAnswer
  // }
}
