const {
  getProjects
} = require('../services/projects')

module.exports = {
  get: async (req, res) => {
    try {
      const projects = await getProjects()
      res.send(projects)
    } catch (err) {
      console.log(err)
    }
  }
}