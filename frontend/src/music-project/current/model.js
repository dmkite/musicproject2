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
            const promiseArray = []
            console.log(songs, '==========================================')
            songs.forEeach(song => {
                song.users_albums_id = result.data.id
                promiseArray.push(
                    axios(baseURL + `/users/${localStorage.getItem('userId')}/albums/${albumId}/songs`, {
                        method: 'post',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                        data: song
                    })
                )
            })
            return Promise.all(promiseArray)
            .then(result => {
                console.log('promise.all resolves to : ', result)
                return result})
            

        })
        .catch(err => console.log(err))
    }

}

const model = new CurrentModel(`/users/${localStorage.getItem('userId')}/queue/current`)

module.exports = model