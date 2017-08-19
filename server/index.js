import Debug from 'debug'
import http from 'http'
import app from './app'
import mongoose from 'mongoose'
import { port, mongoUrl } from './config'

const debug = new Debug('platzi-overflow:root')

mongoose.Promise = global.Promise;

async function start() {
  await mongoose.connect(mongoUrl, {
    useMongoClient: true
  });

  app.listen(port, () => {
    debug(`Server running at port ${port}`)
  })
}

start()
