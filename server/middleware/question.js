import { Question } from '../models'
import { handleError } from '../utils'

export const questionMiddleware = async (req, res, next) => {
  const { id } = req.params
  try {
    req.question = await Question
      .findById(id)
      .populate('answers')
      .populate({
        path: 'answers',
        options: { sort: '-createdAt' },
        populate: {
          path: 'user',
          model: 'User'
        }
      })
    next()
  } catch (err) {
    handleError(err, res)
  }
}
