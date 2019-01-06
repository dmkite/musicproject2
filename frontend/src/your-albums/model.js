const Model = require('../_Model')

const axios = require('axios')
const baseURL = 'http://dmkite-music-project.herokuapp.com'

class AlbumModel extends Model{
    constructor(url){
        super(url)
    }

    all() {
        return axios(baseURL + `/users/${localStorage.getItem('userId')}/albums`, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(result => result)
    }

}
const model = new AlbumModel(`/users/${localStorage.getItem('userId')}/albums`)

module.exports = model