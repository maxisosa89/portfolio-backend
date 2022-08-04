const db = require('../db')

const { About } = db

module.exports = {
  getAbout: async () => {
    try {
      const about = await About.findAll();
      return about
    } catch (err) {
      console.log(err)
    }
  },
  postAbout: async (req) => {
    try {
      const newAbout = await About.create(req.body)
      return newAbout
    } catch (err) {
      console.log(err)
    }
  },
  putAbout: async (id, req) => {
    try {
      const editAbout = await About.findByPk(id)
      editAbout.description = req.body.description
      editAbout.softSkills = req.body.softSkills
      editAbout.subSkills = req.body.subSkills
      editAbout.files = req.body.files
      editAbout.save()
      return editAbout
    } catch (err) {
      console.log(err)
    }
  },
  deleteAbout: async (id) => {
    try {
      const aboutDeleted = await About.destroy({ where: { id } });
      return aboutDeleted
    } catch (err) {
      console.log(err)
    }
  }
}