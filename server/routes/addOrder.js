const addOrderService = require('../services/addOrderService')

const router = require('express').Router()

router.post('/', async (req, res) => {
  await addOrderService(req, res)
})

module.exports = router
