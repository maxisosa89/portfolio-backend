const express = require('express')
const projectsRouter = require('./projects')
const techsRouter = require('./techs')

const router = express.Router()

// Middlewares

// projects routes
router.use('/projects', projectsRouter)

// teches routes
router.use('/techs', techsRouter)

module.exports = router