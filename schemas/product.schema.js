const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string()
  .regex(/^\s*\w+(?:[^\w,]+\w+)*[^,\w]*$/)
  .min(3)
  .max(30)
const price = Joi.number().integer().positive()
const description = Joi.string().min(10)
const image = Joi.string().uri()

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
})

const updateProductScehema = Joi.object({
  name,
  price,
  description,
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
