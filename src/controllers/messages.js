const {
    getMessages,
    postMessage,
    putMessage
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
    },
    put: async (req,res) => {
      const { id } = req.params
      const messageEdited = await putMessage(id)
      res.send(messageEdited)
    }
  }