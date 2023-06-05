const router = require('express').Router()
const { User } = require('../models/user')

router.post('/', async (req, res) => {
  console.log('/')
  try {
    const { email, orders } = req.body
    console.log(orders)

    // Znajdź użytkownika na podstawie adresu e-mail
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).send({ message: 'User not found' })
    }

    // Dodaj zamówienie do koszyka użytkownika
    user.orders.push(...orders)

    // Zapisz zmiany w bazie danych
    await user.save()

    res.status(200).send({ message: 'Order added to user successfully' })
  } catch (error) {
    console.error('Error adding order to user', error)
    res.status(500).send({ message: 'Internal Server Error' })
  }
})

module.exports = router
