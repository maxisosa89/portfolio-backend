const db = require('../db')

const { Tech } = db

module.exports = {
  getTechs: async () => {
    try {
      const allTechs = await Tech.findAll({
        order: [
          ['techTitle', 'ASC'],
        ],
      })
      return allTechs
    } catch (err) {
      console.log(err)
    }
  },
  postTech: async (req) => {
    try {
      const newTech = await Tech.create(req.body)
      return newTech
    } catch (err) {
      console.log(err)
    }
  },
  putTech: async (id, req) => {
    try {
      const editTech = await Tech.findByPk(id)
      editTech.techTitle = req.body.techTitle
      editTech.techImg = req.body.techImg
      editTech.save()
      return editTech
    } catch (err) {
      console.log(err)
    }
  },
  deleteTech: async (id) => {
    try {
      const techDeleted = await Tech.destroy({ where: { id } });
      return techDeleted
    } catch (err) {
      console.log(err)
    }
  }
}