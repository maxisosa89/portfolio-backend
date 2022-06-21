const {
    getMessages,
    postMessage
  } = require('../services/messages')
  
  module.exports = {
    get: async (req, res) => {
      try {
        const messages = await getMessages()
        res.send(messages)
      } catch (err) {
        console.log(err)
      }
    },
    post: async (req, res) => {
      const messageCreated = await postMessage(req)
      res.send(messageCreated)
    }
  }