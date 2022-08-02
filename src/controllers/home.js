const {
    getHome,
    postHome,
    putHome,
    deleteHome
  } = require('../services/home')
  
  module.exports = {
    get: async (req, res) => {
      try {
        const home = await getHome()
        res.send(home)
      } catch (err) {
        console.log(err)
      }
    },
    post: async (req, res) => {
      try {
        const homeCreated = await postHome(req)
        res.send(homeCreated)
      } catch (err) {
        console.log(err)
      }
    },
    put: async (req, res) => {
      try {
        const { id } = req.params
        const homeEdited = await putHome(id, req)
        res.send(homeEdited)
      } catch (err) {
        console.log(err)
      }
    },
    del: async (req, res) => {
      try {
        const { id } = req.params
        const homeDeleted = await deleteHome(id)
        res.send("Home eliminada")
      } catch (err) {
        console.log(err)
      }
    }
  }