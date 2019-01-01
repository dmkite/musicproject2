const axios = require('axios')
const knex = require('../db/knex')

function playlist(body, user_id, access_token, userId) {
    user_id = encodeURIComponent(user_id)
    return axios(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`
        },
        data: body
    })
    .then(result => {
        return knex('users')
        .where('id', userId)
        .update('spotify_playlist_id', result.data.id)
        .returning('*')
    })
    .then(([result]) => result)
}

function populatePlaylist(body, access_token, playlist_id){
    return axios(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`
        },
        data: body
    })
    .then(result => result)
}

module.exports = {playlist, populatePlaylist}
