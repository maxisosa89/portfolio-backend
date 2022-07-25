const express = require('express')

const router = new express.Router()
const {
  get,
  post,
  put,
  del
} = require('../controllers/messages')
const auth = require('../middlewares/auth')


router.get('/', auth, get)

router.post('/', post)

router.put('/:id', auth, put)

router.delete('/:id', auth, del)

module.exports = router