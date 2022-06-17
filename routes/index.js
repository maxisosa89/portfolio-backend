const express = require('express')
const { get } = require('../controllers/index')
const pingRouter = require('./ping')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use('/ping', pingRouter)

module.exports = router
