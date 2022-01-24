const express = require('express')
const cors = require('cors')

const routerApi = require('./routes')
const {
  logErrors,
  errorHandler,
  boomErrorHangler
} = require('./middlewares/error.handler')

const app = express()
const port = 3000

app.use(express.json())

/*
const whitelist = ['http://localhost:8080', 'https://myapp.com']
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('no permitido'))
    }
  }
}
*/
app.use(cors());

app.get('/', (req, res) => {
  res.send('hola mi server en express')
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHangler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('Mi port' + port)
})
