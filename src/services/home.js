const db = require('../db')

const { Home } = db

module.exports = {
  getHome: async () => {
    try {
      const home = await Home.findAll();
      return home
    } catch (err) {
      console.log(err)
    }
  },
  postHome: async (req) => {
    try {
      const newHome = await Home.create(req.body)
      return newHome
    } catch (err) {
      console.log(err)
    }
  },
  putHome: async (id, req) => {
    try {
      const editHome = await Home.findByPk(id)
      editHome.homeTitle = req.body.homeTitle
      editHome.homeSubTitle = req.body.homeSubTitle
      editHome.homeSummary = req.body.homeSummary
      editHome.save()
      return editHome
    } catch (err) {
      console.log(err)
    }
  },
  deleteHome: async (id) => {
    try {
      const homeDeleted = await Home.destroy({ where: { id } });
      return homeDeleted
    } catch (err) {
      console.log(err)
    }
  }
}