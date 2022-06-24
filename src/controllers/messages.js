const {
    getMessages,
    postMessage,
    putMessage,
    deleteMessage
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
      try {
        const messageCreated = await postMessage(req)
        res.send(messageCreated)
      } catch (err) {
        console.log(err)
      }
    },
    put: async (req,res) => {
      try {
        const { id } = req.params
        const messageEdited = await deleteMessage(id)
        res.send(messageEdited)
      } catch (err) {
        console.log(err)
      }
    },
    del: async (req, res) => {
      try {
        const { id } = req.params
        const messageDeleted = await deleteMessage(id)
        res.send("Mensaje eliminado")
      } catch (err) {
        console.log(err)
      }
    }
  }