const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().alphanum().min(3).max(15)
const price = Joi.number().integer().positive()

const createProductSchema = Joi.object({
  name: name.require(),
  price: price.required(),
})

const updateProductScehema = Joi.object({
  id: id.required(),
  name,
  price,
})

const getProductSchema = Joi.object({
  id: id.required(),
})

module.exports = {
  createProductSchema,
  updateProductScehema,
  getProductSchema,
}
