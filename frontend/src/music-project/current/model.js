const Model = require('../../_Model')
const axios = require('axios')
const baseURL = 'http://dmkite-music-project.herokuapp.com'

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
            console.log(result, 'this is from CurrentModel')
            const promiseArray = songs.map(song => {
                song.users_albums_id = result.data.id
                return axios(baseURL + `/users/${localStorage.getItem('userId')}/albums/${result.data.album_id}/songs`, {
                    method: 'post',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    data: song
                })
            })
            return Promise.all(promiseArray)
            .then(result => {
                return result})
            

        })
        .catch(err => console.error(err))
    }

}

const model = new CurrentModel(`/users/${localStorage.getItem('userId')}/queue/current`)

module.exports = model