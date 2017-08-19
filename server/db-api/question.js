import Debug from 'debug'
import { Question } from '../models'
import { handleError } from '../utils'

const debug = new Debug('platzi-overflow:db-api:question')

export default {
  findAll: async() => {
    debug('Finding all questions')
    return await Question.find().populate('answers')
  },

  // findOneById: async(id) => {
  //   return await Question
  //     .findOne({ _id: id })
  //     .populate('user')
  //     .populate({
  //       path: 'answers',
  //       options: { sort: '-createdAt' },
  //       populate: {
  //         path: 'user',
  //         model: 'User'
  //       }
  //     })
  // },
  //
  // create: async(q) => {
  //   const question = new Question(q)
  //   await question.save()
  //   q.user.questions.push(savedQuestion)
  //   q.user.save()
  //   return question
  // },
  //
  // createAnswer: async(question, a) => {
  //   const answer = new Answer({ description, user, question})
  //   const savedAnswer = await answer.save()
  //   question.answers.push(savedAnswer)
  //   question.save()
  //   return savedAnswer
  // }
}
