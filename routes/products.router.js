const express = require('express')
const faker = require('@faker-js/faker')

const router = express.Router()


router.get('/', (req, res) => {
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

router.get('/filter', (req, res) => {
  res.send('yo soy un filter')
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'Producto 1',
    price: 1000
  })
})

module.exports = router

