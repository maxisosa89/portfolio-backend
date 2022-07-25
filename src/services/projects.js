const db = require('../db')

const { Project, Tech } = db

module.exports = {
    getProjects: async () => {
        try {
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
        } catch (err) {
            console.log(err)
        }
    },
    getProjectById: async (id) => {
        try {
            const project = await Project.findByPk(id, {
                include: {
                    model: Tech,
                    attributes: ['techTitle', 'techImg'], as: "tech",
                    through: {
                        attributes: [],
                    }
                }
            })
            return project
        } catch (err) {
            console.log(err)
        }
    },
    deleteProject: async (id) => {
      try {
        const projectDeleted = await Project.destroy({ where: { id } });
        return projectDeleted
      } catch (err) {
        console.log(err)
      }
    }
}