const axios = require('axios')
const baseURL = 'http://localhost:3000'

class Model{
    constructor(url){
        this.url = url
    }

    add(body){
        return axios(baseURL + this.url, {
            method: 'post',
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            data: body
        })
        .then(result => {
            console.log(result, ' from model')
            return result
        })
        .catch(err => console.log(err))
    }

    all(){
        return axios(baseURL + this.url, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(result => result)
    }
}

module.exports = Model