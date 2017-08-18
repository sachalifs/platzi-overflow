import Debug from 'debug'
import http from 'http'
import app from './app'

const debug = new Debug('platzi-overflow:root')
const PORT = 3000

app.listen(PORT, () => {
  debug(`Server running at port ${PORT}`)
})
