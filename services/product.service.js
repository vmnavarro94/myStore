const faker = require('@faker-js/faker')

class ProductsService {

  constructor() {
    this.products = []
    this.generate()
  }

  generate() {
    const limit = 100
    for(let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        image: faker.image.imageUrl(),
      })
    }

  }

  create({ name, price, image }) {
    const newProduct = {
      id: faker.datatype.uuid(),
      name,
      price,
      image,
    }
    this.products.push(newProduct)
    return newProduct
  }

  find() {
    return this.products
  }

  findOne(id) {
    return this.products.find(item => item.id === id)
  }

  update(id, changes) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('product not found')
    }
    const product = this.products[index]
    this.products[index] = { ...product, ...changes }
    return this.products[index]
  }

  delete(id) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('product not found')
    }
    this.products.splice(index, 1)
    return { id }
  }
}

module.exports = ProductsService
