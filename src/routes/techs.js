const express = require('express')

const router = new express.Router()
const {
  get,
  post
} = require('../controllers/techs')


router.get('/', get)

router.post('/', post)

module.exports = router