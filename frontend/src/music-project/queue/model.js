const Model = require('../../_Model')
const axios = require('axios')
const userId = localStorage.getItem('userId')
const baseURL = 'http://dmkite-music-project.herokuapp.com/'


class QueueModel extends Model{
    constructor(url){
        super(url)
    }

    delete(albumId) {
        return axios(baseURL + this.url + `/albums/${albumId}`, {
            method: 'delete',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(result => result)
    }

    
}

const model = new QueueModel(`/users/${userId}/queue`)

module.exports = model