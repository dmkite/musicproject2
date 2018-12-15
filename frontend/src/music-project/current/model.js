const Model = require('../../_Model')
const axios = require('axios')
const baseURL = 'http://localhost:3000'

class CurrentModel extends Model{
    constructor(url){
        super(url)
    }

    add(data) {
        const {body, songs} = data
        return axios(baseURL + `/users/${localStorage.getItem('userId')}/albums`, {
            method: 'post',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            data: body
        })
        .then(result => {
            if(songs.length > 0){
                return axios(baseURL + `/users/${localStorage.getItem('userId')}/albums/songs`, {
                    method: 'post',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    data: songs
                })
            }
            else{
                return result
            }
        })
        .catch(err => console.log(err))
    }
}

const model = new CurrentModel(`/users/${localStorage.getItem('userId')}/queue/current`)

module.exports = model