const {
    getTechs,
    postTech,
    putTech,
    deleteTech
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
    put: async (req, res) => {
      try {
        const { id } = req.params
        const techEdited = await putTech(id, req)
        res.send(techEdited)
      } catch (err) {
        console.log(err)
      }
    },
    del: async (req, res) => {
      try {
        const { id } = req.params
        const techDeleted = await deleteTech(id)
        res.send("Tech eliminada")
      } catch (err) {
        console.log(err)
      }
    }
  }