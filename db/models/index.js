const { User, UserSchema } = require('./user.model')
const { Customer, CustomerSchema } = require('./customer.model')
const { Category, CategorySchema } = require('./category.model')
const { Product, ProductSchema } = require('./product.model')

const setupModels = (sequelize) => {
  // inits
  User.init(UserSchema, User.config(sequelize))
  Customer.init(CustomerSchema, Customer.config(sequelize))
  Category.init(CategorySchema, Category.config(sequelize))
  Product.init(ProductSchema, Product.config(sequelize))

  // associations
  User.associate(sequelize.models)
  Customer.associate(sequelize.models)
  Category.associate(sequelize.models)
  Product.associate(sequelize.models)
}

module.exports = setupModels
