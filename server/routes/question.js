import express from 'express'
import {
  required,
  user,
  questionMiddleware
} from '../middleware'
import { question, answer } from '../db-api'
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

app.get('/:id', questionMiddleware, async (req, res) => {
  res.status(200).json(req.question)
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

app.post('/:id/answers', required, user, questionMiddleware, async (req, res, next) => {
  const { title, description, icon } = req.body
  const a = { title, description, icon }
  a.user = req.user
  const saved = await answer.create(req.question, a)
  res.status(201).json(saved)
})

export default app
