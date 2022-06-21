const express = require('express')

const router = new express.Router()
const {
  get,
  post
} = require('../controllers/messages')


router.get('/', get)

router.post('/', post)

module.exports = router