const { User } = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

const login = async ({ email, password }) => {
    try {
        const user = await User.findOne({
            where: {
                email,
            }
        });
        if (!user) {
            throw new Error("User not found.");
        }else {
            if (bcrypt.compareSync(password, user.password)) {
                let token = jwt.sign({ user: user }, authConfig.secret, {
                    expiresIn: authConfig.expires
                })
                return ({
                    idUser: user.idUser,
                    nameUser: user.nameUser,
                    email: user.email,
                    token: token
                })
            }else {
                throw new Error("Password incorrect.")
            }
        }
    } catch(err) {
        throw err
    }
}
        
module.exports = {
    login
}