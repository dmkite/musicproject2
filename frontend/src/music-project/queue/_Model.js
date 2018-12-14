const axios = require('axios')
const baseURL = 'http://localhost:3000'

class Model{
    constructor(url){
        this.url = url
    }

    add(body){
        return axios.post(baseURL + this.url, body)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
}

module.exports = Model