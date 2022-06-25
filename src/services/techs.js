const db = require('../db')

const { Tech } = db

module.exports = {
    getTechs: async () => {
        try {
            const allTechs = await Tech.findAll()
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
}