const axios = require('./axios')
const baseURL = 'http://localhost:3000'

function addToDbQueue() {
    return axios(baseURL + `/users/${userId}/queues`)
}

module.exports = {addToDbQueue}