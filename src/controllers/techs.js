const {
    getTechs
  } = require('../services/techs')
  
  module.exports = {
    get: async (req, res) => {
      try {
        const techs = await getTechs()
        res.send(techs)
      } catch (err) {
        console.log(err)
      }
    }
  }