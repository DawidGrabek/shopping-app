const addUserService = require('../services/addUserService')

const router = require('express').Router()

router.post('/', async (req, res) => {
  await addUserService(req, res)
})

module.exports = router
