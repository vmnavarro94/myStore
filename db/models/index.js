const { User, UserSchema } = require('./user.model')
const { Customer, CustomerSchema } = require('./customer.model')

const setupModels = (sequelize) => {
  // inits
  User.init(UserSchema, User.config(sequelize))
  Customer.init(CustomerSchema, Customer.config(sequelize))

  // associations
  User.associate(sequelize.models)
  Customer.associate(sequelize.models)
}

module.exports = setupModels
