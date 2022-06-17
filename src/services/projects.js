const db = require('../db')

const { Project, Tech } = db

module.exports = {
    getProjects: async () => {
        const allProjects = await Project.findAll({
            include: {
                model: Tech,
                attributes: ['techTitle', 'techImg'], as: "tech",
                through: {
                    attributes: [],
                }
            }
        })
        return allProjects
  }
}