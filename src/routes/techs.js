const express = require('express')

const router = new express.Router()
const {
  get,
  post,
  put,
} = require('../controllers/techs')


router.get('/', get)

router.post('/', post)

router.put('/:id', put)

module.exports = router