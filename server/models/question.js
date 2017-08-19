import mongoose, { Schema } from 'mongoose'
import { User, Answer } from './'

const { ObjectId } = Schema.Types

const QuestionSchema = Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, index: true },
  user: { type: ObjectId, ref: 'User', required: true },
  icon: { type: String },
  answers: [{ type: ObjectId, ref: 'Answer' }]
})

QuestionSchema.post('remove', async message => {
  const user = await User.findById(message.user)
  user.messages.pull(message)
  user.save()
})

export default mongoose.model('Question', QuestionSchema)
