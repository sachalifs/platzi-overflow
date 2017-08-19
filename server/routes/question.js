import express from 'express'

const app = express.Router()

const currentUser = {
  email: 'sacha@platzi.com',
  password: '123456',
  firstName: 'Sacha',
  lastName: 'Lifszyc'
}

const userMiddleware = (req, res, next) => {
  req.user = currentUser
  next()
}

const questionMiddleware = (req, res, next) => {
  const { id } = req.params
  req.question = questions.find(({ _id }) => _id === +id)
  next()
}

const question = {
  _id: 1,
  title: '¿Cómo reutilizo un componente en Android?',
  description: 'Miren esta es mi duda...',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  answers: [],
  user: {
    email: 'sacha@platzi.com',
    password: '123456',
    firstName: 'Sacha',
    lastName: 'Lifszyc'
  }
}

const questions = new Array(10).fill(question)

app.get('/', (req, res) => {
  res.status(200).json(questions)
})

app.get('/:id', questionMiddleware, (req, res) => {
  res.status(200).json(req.question)
})

app.post('/', userMiddleware, (req, res, next) => {
  const question = req.body
  question._id = +new Date()
  question.user = req.user
  question.createdAt = new Date()
  question.answers = []
  questions.push(question)
  res.status(201).json(question)
})

app.post('/:id/answers', questionMiddleware, userMiddleware, (req, res, next) => {
  const answer = req.body
  const q = req.question
  answer.createdAt = new Date()
  answer.user = req.user
  q.answers.push(answer)
  res.status(201).json(answer)
})

export default app
