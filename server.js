const express = require('express')
const bodyParser = require('body-parser')
const sanitizeMiddleware = require('./src/middlewares/sanitizers')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(sanitizeMiddleware)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/submit', (req, res) => {
  // Process the sanitized input
  res.send('Input processed securely')
})

app.listen(PORT, () => {
  console.log(`Server running on PORT => ${PORT}`)
})
