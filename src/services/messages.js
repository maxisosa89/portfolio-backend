const db = require('../db')

const { Message } = db

module.exports = {
    getMessages: async () => {
        try {
            const allMessages = await Message.findAll()
            return allMessages
        } catch (err) {
            console.log(err)
        }
    },
    postMessage: async (req) => {
        try {
          const newMessage = await Message.create(req.body)
          return newMessage
        } catch (err) {
            console.log(err)
        }
    },
}