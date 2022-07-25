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
    postProject: async (req) => {
      try {
        const newProject = await Project.create(req.body)
        req.body.tech.map(async (t) => {
            const techToAdd = await Tech.findOne({ where: { techTitle: t.techTitle } })
            newProject.addTech(techToAdd)
        })
        return newProject
      } catch (err) {
        console.log(err)
      }
    },
    putProject: async (id, req) => {
      try {
        const editProject = await Project.findByPk(id, {
            include: {
                model: Tech,
                attributes: ['techTitle'], as: "tech",
                through: {
                    attributes: [],
                }
            }
        })
        const techsProject = editProject.toJSON().tech
        const techsReq = req.body.tech
        const techsToAdd = techsReq.filter(t => techsProject.every(item => item.techTitle !== t.techTitle))
        const techsToRemove = techsProject.filter(t => techsReq.every(item => item.techTitle !== t.techTitle))
        editProject.projectTitle = req.body.projectTitle
        editProject.projectImg = req.body.projectImg
        editProject.projectSummary = req.body.projectSummary
        editProject.projectDescription = req.body.projectDescription
        editProject.projectFunctions = req.body.projectFunctions
        editProject.siteUrl = req.body.siteUrl
        editProject.frontUrl = req.body.frontUrl
        editProject.backUrl = req.body.backUrl
        techsToAdd.map(async (t) => {
            const tAdd = await Tech.findOne({where: { techTitle: t.techTitle}})
            editProject.addTech(tAdd)
        })
        techsToRemove.map(async (t) => {
            const tRemove = await Tech.findOne({where: { techTitle: t.techTitle}})
            editProject.removeTech(tRemove)
        })
        editProject.save()
        return editProject
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