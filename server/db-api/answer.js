import { Answer } from '../models'

export default {
  create: async(q, a) => {
    const answer = new Answer(a)
    const saved = await answer.save()
    q.answers.push(saved)
    q.save()
    return saved
  }
}
