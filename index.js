const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hola mi server en express')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('hola nueva ruta')
})

app.get('/products', (req, res) => {
  res.json({
    name: 'Producto 1',
    price: '1000'
  })
})

app.listen(port, () => {
  console.log('Mi port' + port)
})
