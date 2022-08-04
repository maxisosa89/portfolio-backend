const {
    getAbout,
    postAbout,
    putAbout,
    deleteAbout
  } = require('../services/about')
  
  module.exports = {
    get: async (req, res) => {
      try {
        const about = await getAbout()
        res.send(about)
      } catch (err) {
        console.log(err)
      }
    },
    post: async (req, res) => {
      try {
        const aboutCreated = await postAbout(req)
        res.send(aboutCreated)
      } catch (err) {
        console.log(err)
      }
    },
    put: async (req, res) => {
      try {
        const { id } = req.params
        const aboutEdited = await putAbout(id, req)
        res.send(aboutEdited)
      } catch (err) {
        console.log(err)
      }
    },
    del: async (req, res) => {
      try {
        const { id } = req.params
        const aboutDeleted = await deleteAbout(id)
        res.send("About eliminada")
      } catch (err) {
        console.log(err)
      }
    }
  }