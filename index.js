const express = require('express')
const faker = require('@faker-js/faker')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hola mi server en express')
})

app.get('/products', (req, res) => {
  const products = []
  const { size } = req.query
  const limit = size || 10
  for(let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products)
})

app.get('/products/filter', (req, res) => {
  res.send('yo soy un filter')
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

app.get('/users', (req, res) => {
  const { limit, offset } = req.query
  if (limit && offset) {
    res.json({
      limit,
      offset,
    })
  } else {
    res.send('No hay parametros')
  }
})

app.listen(port, () => {
  console.log('Mi port' + port)
})
