const {
    getMessages
  } = require('../services/messages')
  
  module.exports = {
    get: async (req, res) => {
      try {
        const messages = await getMessages()
        res.send(messages)
      } catch (err) {
        console.log(err)
      }
    }
  }