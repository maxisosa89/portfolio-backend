const {
  getProjects,
  getProjectById,
  postProject,
  deleteProject
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
  },
  post: async (req, res) => {
    try {
      const projectCreated = await postProject(req)
      res.send(projectCreated)
    } catch (err) {
      console.log(err)
    }
  },
  del: async (req, res) => {
    try {
      const { id } = req.params
      const projectDeleted = await deleteProject(id)
      res.send("Proyecto eliminado")
    } catch (err) {
      console.log(err)
    }
  }
}