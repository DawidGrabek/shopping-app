const getDataService = require('../services/getDataService')
const verifyTokenMiddleware = require('./../middlewares/verifyToken')
const router = require('express').Router()

router.get('/', verifyTokenMiddleware, async (req, res) => {
  getDataService(req, res)
})

module.exports = router
