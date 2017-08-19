import express from 'express'
import {
  required,
  questionMiddleware,
  questions
} from '../middleware'

const app = express.Router()

app.get('/', (req, res) => {
  res.status(200).json(questions)
})

app.get('/:id', questionMiddleware, (req, res) => {
  res.status(200).json(req.question)
})

app.post('/', required, (req, res, next) => {
  const question = req.body
  question._id = +new Date()
  question.user = req.user
  question.createdAt = new Date()
  question.answers = []
  questions.push(question)
  res.status(201).json(question)
})

app.post('/:id/answers', required, questionMiddleware, (req, res, next) => {
  const answer = req.body
  const q = req.question
  answer.createdAt = new Date()
  answer.user = req.user
  q.answers.push(answer)
  res.status(201).json(answer)
})

export default app
