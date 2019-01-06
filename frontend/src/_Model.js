const axios = require('axios')
const baseURL = 'http://dmkite-music-project.herokuapp.com'

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
            return result
        })
        .catch(err => console.log(err))
    }

    all(url){
        return axios(baseURL + url, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(result => result)
    }

    one(){
        return axios(baseURL + this.url, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(result => result)
    }

    delete(body){
        return axios(baseURL + this.url, {
            method: 'delete',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body
        })
        .then(result => result)
    }

    update(body){
        let request = axios.create({
            method: 'PATCH',
            baseURL: `${baseURL + this.url}`,
            headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
            },
  })
    return request.patch(null, body);
    }
}

module.exports = Model