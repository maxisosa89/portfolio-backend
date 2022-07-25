const express = require('express')
const projectsRouter = require('./projects')
const techsRouter = require('./techs')
const messagesRouter = require('./messages')
const userRouter = require('./user')

const router = express.Router()

// user routes
router.use('/login', userRouter)

// projects routes
router.use('/projects', projectsRouter)

// teches routes
router.use('/techs', techsRouter)

// messages routes
router.use('/messages', messagesRouter)

module.exports = router