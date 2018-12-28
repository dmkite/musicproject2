const axios = require('axios')
const clientId = 'f0c75fb80a7a43f2b207e62c4f609915'
const clientSecret = require('../clientSecret')
const base64 = require('js-base64').Base64

function playlist(body, user_id, access_token) {
    const auth = clientId + ':' + clientSecret
    user_id = encodeURIComponent(user_id)
    return axios(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: `Basic ${base64.encode(auth)}` 
            Authorization: `Bearer ${access_token}`
        },
        data: body
    })
        .then(result => result)
}

module.exports = {playlist}
