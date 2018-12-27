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
        // console.log(body)
        // return axios(baseURL + this.url, {
        //     method: 'put',
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem('token')}`
        //     },
        //     body: body
        // })
        // .then(result => result)


        
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