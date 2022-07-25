const express = require('express')

const router = new express.Router()
const {
  get,
  getById,
  post,
  del
} = require('../controllers/projects')


router.get('/', get)
router.get('/:id', getById)

router.post('/', post)

router.delete('/:id', del)

module.exports = router