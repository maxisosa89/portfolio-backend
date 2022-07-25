const express = require('express')

const router = new express.Router()
const {
  get,
  getById,
  post,
  put,
  del
} = require('../controllers/projects')
const auth = require('../middlewares/auth')

router.get('/', get)
router.get('/:id', getById)

router.post('/', auth, post)

router.put('/:id', auth, put)

router.delete('/:id', auth, del)

module.exports = router