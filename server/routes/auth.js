import express from 'express'
import jwt from 'jsonwebtoken'
import Debug from 'debug'
import { secret } from '../config'
import { findUserByEmail, userMiddleware } from '../middleware'

const app = express.Router()
const debug = new Debug('platzi-overflow:auth')

app.post('/signup', async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body
  const user = {
    _id: +new Date(),
    firstName,
    lastName,
    email,
    password
  }
  debug(`Created new user: ${user}`)
  users.push(user)
  const token = jwt.sign({ user }, secret, { expiresIn: 86400})
  res.status(201).json({
    message: 'Saved user',
    token,
    userId: user._id,
    firstName,
    lastName,
    email
  })
})

const comparePasswords = (providedPassword, userPassword) =>
  providedPassword === userPassword

app.post('/signin', async (req, res, next) => {
  const { email, password } = req.body
  const user = findUserByEmail(email)
  if (!user) {
    debug(`User with email ${email} not found`)
    return handleLoginFailed(res)
  }

  if (!comparePasswords(password, user.password)) {
    debug(`Passwords do not match: ${password} !== ${user.password}`)
    return handleLoginFailed(res, 'El correo y la contraseña no coinciden')
  }

  const token = jwt.sign({ user }, secret, { expiresIn: 86400})
  res.status(200).json({
    message: 'Login succeeded',
    token,
    userId: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  })
})

function handleLoginFailed(res, message) {
  res.status(401).json({
    message: message || 'Login failed',
    error: `Email and password don't match`
  })
}

export default app
