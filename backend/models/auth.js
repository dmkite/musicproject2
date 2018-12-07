const knex = require('../db/knex')
const bcrypt = require('bcrypt')

function login(email, password) {
    return knex('users')
        .where('email', email)
        .then(([data]) => {
            if (!data) throw { status: 400, message: `No user registered for ${email}` }
            return bcrypt.compare(password, data.password)
                .then(authStatus => {
                    if (!authStatus) throw { status: 401, message: 'Invalid password' }
                    delete data.password
                    return data
                })
        })
}

module.exports = { login }