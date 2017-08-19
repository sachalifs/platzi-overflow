import express from 'express'

const app = express.Router()

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

app.get('/:id', (req, res) => {
  const { id } = req.params
  console.log({ id })
  const q = questions.find(({ _id }) => _id === +id)
  res.status(200).json(q)
})

app.post('/', async (req, res, next) => {
  const question = req.body
  question._id = +new Date()
  question.user = {
    email: 'sacha@platzi.com',
    password: '123456',
    firstName: 'Sacha',
    lastName: 'Lifszyc'
  }
  question.createdAt = new Date()
  question.answers = []
  questions.push(question)
  res.status(201).json(question)
})

export default app
