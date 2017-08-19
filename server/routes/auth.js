import express from 'express'
import jwt from 'jsonwebtoken'
import Debug from 'debug'

const app = express.Router()
const debug = new Debug('platzi-overflow:auth')

const secret = 'miclavesecreta'

const users = [
  {
    _id: '123',
    email: 'sacha@platzi.com',
    password: '123456',
    firstName: 'Sacha',
    lastName: 'Lifszyc'
  }
]

// app.post('/signup', async (req, res, next) => {
//   const user = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     password: hash(req.body.password, 10)
//   })
//   try {
//     const result = await user.save()
//     const token = jwt.sign({ user }, secret, { expiresIn: 86400})
//     const { _id, email, firstName, lastName } = result._doc
//     res.status(201).json({
//       message: 'Saved user',
//       token,
//       userId: _id,
//       firstName,
//       lastName,
//       email
//     })
//   } catch (err) {
//     res.status(500).json({
//       message: 'An error occurred',
//       error: err
//     })
//   }
// })

const findUserByEmail = (e) => {
  return users.find(({ email }) => email === e)
}

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
    return handleLoginFailed(res)
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

function handleLoginFailed(res) {
  res.status(401).json({
    message: 'Login failed',
    error: `Email and password don't match`
  })
}

export default app
