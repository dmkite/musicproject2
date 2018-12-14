const axios = require('axios')
const baseURL = 'http://localhost:3000'

class Model{
    constructor(url){
        this.url = url
    }

    add(body){
        return axios.post(baseURL + url, body)
        .then(result => console.log(result))
    }
}

module.exports = Model