const getDataService = require('../services/getDataService')
const verifyTokenMiddleware = require('./../middlewares/verifyToken')
const router = require('express').Router()

router.get('/', verifyTokenMiddleware, async (req, res) => {
  await getDataService(req, res) // idk if i should use await
})

module.exports = router
