const authService = require('../services/authService')
const getDataService = require('../services/getDataService')

const router = require('express').Router()

router.post('/', async (req, res) => {
  await authService(req, res)
})

router.get('/', async (req, res) => {
  await getDataService(req, res)
})

module.exports = router
