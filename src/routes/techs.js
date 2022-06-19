const express = require('express')

const router = new express.Router()
const {
  get
} = require('../controllers/techs')


router.get('/', get)

module.exports = router