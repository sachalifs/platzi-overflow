import express from 'express'
import {
  required,
  user
} from '../middleware'
import { question } from '../db-api'
import { handleError } from '../utils'

const app = express.Router()

app.get('/', async (req, res) => {
  try {
    const questions = await question.findAll()
    res.status(200).json(questions)
  } catch (err) {
    handleError(err, res)
  }
})

app.get('/:id', async (req, res) => {
  try {
    const q = await question.findById(req.params.id)
    res.status(200).json(q)
  } catch (err) {
    handleError(err, res)
  }
})

app.post('/', required, user, async (req, res, next) => {
  const { title, description, icon } = req.body
  const q = {
    title,
    description,
    user: req.user,
    icon
  }

  const saved = await question.create(q)
  res.status(201).json(saved)
})

app.post('/:id/answers', required, (req, res, next) => {
  const answer = req.body
  const q = req.question
  answer.createdAt = new Date()
  answer.user = req.user
  q.answers.push(answer)
  res.status(201).json(answer)
})

export default app
