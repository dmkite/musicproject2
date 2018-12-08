const knex = require('../db/knex')
const bcrypt = require('bcrypt')

function signup(f_name, l_name, username, password) {
    console.log(username, 'before')
    username = username.toLowerCase()
    console.log(username, 'after')
    return knex('users')
        .where('username', username)
        .then(([data]) => {
            if (!!data) throw {
                status: 400,
                message: 'Username already in use'
            }
            return bcrypt.hash(password, 10)
        })
        .then(hashedPW => {
            console.log(username, 'prestoring')
            return knex('users')
                .insert({
                    f_name,
                    l_name,
                    username,
                    password: hashedPW
                })
                .returning('users.username')
        })
}


module.exports = {signup}