import Debug from 'debug'
import http from 'http'

const debug = new Debug('platzi-overflow:root')
const PORT = 3000

const app = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write('Hola desde PlatziOverflow')
  res.end()
})

app.listen(PORT, () => {
  debug(`Server running at port ${PORT}`)
})
