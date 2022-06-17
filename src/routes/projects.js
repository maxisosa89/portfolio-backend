const express = require('express')

const router = new express.Router()
const {
  get
} = require('../controllers/projects')


router.get('/', get)

module.exports = router