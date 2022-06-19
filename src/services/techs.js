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
  }
}