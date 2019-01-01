const Model = require('../_Model')
const axios = require('axios')

class PlaylistModel extends Model{
    constructor(url){
        super(url)
    }

    replacePlaylist(body, playlist_id){
        return axios(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            },
            data: body
        })
            .then(result => result)
    }
}
const model = new PlaylistModel(`/users/${localStorage.getItem('userId')}/playlist`)

module.exports = model