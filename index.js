const express = require('express')
const cors = require('cors')

const routerApi = require('./routes')
const {
  logErrors,
  errorHandler,
  boomErrorHangler,
  ormErrorHandler,
} = require('./middlewares/error.handler')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

/*
const whitelist = ['http://localhost:8080', 'https://myapp.com']
const options = {
  origin: (origin, callback) => {
    if(!origin || whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('no permitido'))
    }
  }
}
*/
app.use(cors())

app.get('/', (req, res) => {
  res.send('MyStore API')
})

routerApi(app)

app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomErrorHangler)
app.use(errorHandler)

app.listen(port)
