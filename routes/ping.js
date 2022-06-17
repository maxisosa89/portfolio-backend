const express = require('express')

const router = new express.Router()
const { pong } = require('../controllers/ping')

router.get('/', pong)

module.exports = router
