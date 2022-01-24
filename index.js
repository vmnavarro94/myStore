const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hola mi server en express')
})

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Producto 1',
      price: 1000,
    },
    {
      name: 'Producto 2',
      price: 10,
    }
  ])
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'Producto 1',
    price: 1000
  })
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params
  res.json({
    categoryId,
    productId,
  })
})

app.listen(port, () => {
  console.log('Mi port' + port)
})
