const Model = require('../../_Model')
const axios = require('axios')
const baseURL = 'http://dmkite-music-project.herokuapp.com'

class SongModel extends Model{
    constructor(url){
        super(url)
    }
    
    all() {

        return axios(baseURL + `/users/${localStorage.getItem('userId')}/songs`, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(result => result)
    }


}

const model = new SongModel(`/users/${localStorage.getItem('userId')}/songs`)

module.exports = model
