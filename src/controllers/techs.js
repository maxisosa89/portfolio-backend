const {
    getTechs,
    postTech,
  } = require('../services/techs')
  
  module.exports = {
    get: async (req, res) => {
      try {
        const techs = await getTechs()
        res.send(techs)
      } catch (err) {
        console.log(err)
      }
    },
    post: async (req, res) => {
      try {
        const techCreated = await postTech(req)
        res.send(techCreated)
      } catch (err) {
        console.log(err)
      }
    },
  }