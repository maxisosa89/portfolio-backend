const express = require('express')

const router = new express.Router()
const {
  login
} = require('../controllers/auth')

router.post('/', login)

module.exports = router