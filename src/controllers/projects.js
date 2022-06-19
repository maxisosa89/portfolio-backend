const {
  getProjects,
  getProjectById
} = require('../services/projects')

module.exports = {
  get: async (req, res) => {
    try {
      const projects = await getProjects()
      res.send(projects)
    } catch (err) {
      console.log(err)
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params
      const project = await getProjectById(id)
      res.send(project)
    } catch (err) {
      console.log(err)
    }
  }
}