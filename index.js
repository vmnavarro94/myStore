const express = require('express')

const routerApi = require('./routes')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hola mi server en express')
})

routerApi(app)

app.listen(port, () => {
  console.log('Mi port' + port)
})
