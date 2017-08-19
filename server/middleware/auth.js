import jwt from 'jsonwebtoken'
import { secret } from '../config'
import Debug from 'debug'

const debug = new Debug('platzi-overflow:auth')

const users = [
  {
    _id: '123',
    email: 'sacha@platzi.com',
    password: '123456',
    firstName: 'Sacha',
    lastName: 'Lifszyc'
  }
]

export const findUserByEmail = (e) => {
  return users.find(({ email }) => email === e)
}

export const required = (req, res, next) => {
  jwt.verify(req.query.token, secret, (err, token) => {
    if (err) {
      debug('JWT was not encrypted with our secret')
      return res.status(401).json({
        message: 'Unauthorized',
        error: err
      })
    }

    debug(`Token verified: ${token}`)
    req.user = token.user
    next()
  })
}
