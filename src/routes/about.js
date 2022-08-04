const express = require('express')

const router = new express.Router()
const {
  get,
  post,
  put,
  del
} = require('../controllers/about')
const auth = require('../middlewares/auth')


router.get('/', get)

router.post('/', auth, post)

router.put('/:id', auth, put)

router.delete('/:id', auth, del)

module.exports = router