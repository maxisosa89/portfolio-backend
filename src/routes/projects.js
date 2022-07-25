const express = require('express')

const router = new express.Router()
const {
  get,
  getById,
  del
} = require('../controllers/projects')


router.get('/', get)
router.get('/:id', getById)

router.delete('/:id', del)

module.exports = router