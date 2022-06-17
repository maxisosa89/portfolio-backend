const express = require('express')
const projectsRouter = require('./projects')

const router = express.Router()

// Middlewares

// projects routes
router.use('/projects', projectsRouter)

// teches routes

module.exports = router