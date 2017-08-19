import mongoose, { Schema } from 'mongoose'
import unique from 'mongoose-unique-validator'

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
})

UserSchema.plugin(unique)

export default mongoose.model('User', UserSchema)
