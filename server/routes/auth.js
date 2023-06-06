const authService = require('../services/authService')

const router = require('express').Router()

router.post('/', async (req, res) => {
  await authService(req, res)
})

module.exports = router
