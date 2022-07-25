const services = require('../services/auth.js')

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const response = await services.login({ email, password })
        res.json(response)
    } catch(error) {
        next(error);
    }
}

module.exports = {
    login
}