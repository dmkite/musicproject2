const knex = require('../db/knex')
const bcrypt = require('bcrypt')
const axios = require('axios')
const clientId = 'f0c75fb80a7a43f2b207e62c4f609915'
const clientSecret = '8ec87c8d02d64c0abb395e69c652db54'
const base64  = require('js-base64').Base64

function login(username, password) {
    return knex('users')
        .where('username', username)
        .then(([data]) => {
            if (!data) throw { status: 400, message: `No user registered for ${username}` }
            return bcrypt.compare(password, data.password)
                .then(authStatus => {
                    if (!authStatus) throw { status: 401, message: 'Invalid password' }
                    delete data.password
                    return data
                })
        })
}

function spotify(body){
    const auth = clientId + ':' + clientSecret 
    return axios('https://accounts.spotify.com/api/token', {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${base64.encode(auth)}`
        },
        params: body
    })
    .then(result => {
        return result
    })
}


module.exports = { login, spotify }