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

  create() {

  }

  find() {
    return this.products
  }

  findOne(id) {
    return this.products.find(item => item.id === id)
  }

  update() {

  }

  delete() {

  }
}

module.exports = ProductsService
