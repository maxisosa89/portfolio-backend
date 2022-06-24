const express = require('express')

const router = new express.Router()
const {
  get,
  post,
  put,
  del
} = require('../controllers/messages')


router.get('/', get)

router.post('/', post)

router.put('/:id', put)

router.delete('/:id', del)

module.exports = router