const axios = require('axios')
const baseURL = 'http://localhost:3000'


function login(body){
    return axios.post(`${baseURL}/auth/token`, body)
}

function signup(body){
    return axios.post(`${baseURL}/users/signup`, body)
}

module.exports = {login, signup}