const express = require('express')

const router = new express.Router()
const {
  get,
  getById
} = require('../controllers/projects')


router.get('/', get)
router.get('/:id', getById)

module.exports = router