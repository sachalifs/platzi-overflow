import express from 'express'

const app = express.Router()

const question = {
  _id: 1,
  title: '¿Cómo reutilizo un componente en Android?',
  description: 'Miren esta es mi duda...',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  answers: []
}

const questions = new Array(10).fill(question)

app.get('/', (req, res) => {
  res.status(200).json(questions)
})

app.get('/:id', (req, res) => {
  res.status(200).json(question)
})

export default app
