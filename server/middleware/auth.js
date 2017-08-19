import jwt from 'jsonwebtoken'
import { secret } from '../config'
import Debug from 'debug'
import { User } from '../models'

const debug = new Debug('platzi-overflow:auth')

export function required(req, res, next) {
  jwt.verify(req.query.token, secret, (err, token) => {
    if (err) {
      debug('JWT was not encrypted with our secret')
      return res.status(401).json({
        message: 'Unauthorized',
        error: err
      })
    }

    debug(`Token verified: ${token}`)
    req.token = token
    next()
  })
}

export async function user(req, res, next) {
  const id = req.token.user._id
  try {
    const user = await User.findById(id)
    if (!user) {
      debug(`User with id ${id} not found`)
      return res.status(401).json({
        message: 'User not found',
        error: err
      })
    }

    debug(`User ${id} successfully found`)
    req.user = user
    next()
  } catch (err) {
    debug(`An error occurred while getting the user ${id}`)
    handleError(err, res)
  }
}
