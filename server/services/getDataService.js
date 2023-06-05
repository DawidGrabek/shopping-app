const { User } = require('../models/user')
const Joi = require('joi')

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label('email'),
  })
  return schema.validate(data)
}

module.exports = async (req, res) => {
  try {
    const { error } = validate(req.query)
    if (error)
      return res.status(400).send({ message: error.details[0].message })
    const user = await User.findOne({ email: req.query.email })
    if (!user) return res.status(404).send({ message: 'User not found' })
    res.status(200).send({ data: user, message: 'User found' })
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' })
  }
}
