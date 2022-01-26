const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string()
  .regex(/^\s*\w+(?:[^\w,]+\w+)*[^,\w]*$/)
  .min(3)
  .max(30)
const price = Joi.number().integer().positive()
const image = Joi.string().uri()

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
})

const updateProductScehema = Joi.object({
  name,
  price,
  image,
})

const getProductSchema = Joi.object({
  id: id.required(),
})

module.exports = {
  createProductSchema,
  updateProductScehema,
  getProductSchema,
}
