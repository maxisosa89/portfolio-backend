const {
  getProjects
} = require('../services/projects')

module.exports = {
  get: async (req, res) => {
    const projects = await getProjects()
    res.send(projects)
  }
}