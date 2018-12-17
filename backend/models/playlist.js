const axios = require('axios')
const clientId = 'f0c75fb80a7a43f2b207e62c4f609915'
const clientSecret = '8ec87c8d02d64c0abb395e69c652db54'
const base64 = require('js-base64').Base64

function playlist(body, user_id) {
    const auth = clientId + ':' + clientSecret
    return axios(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${base64.encode(auth)}`
        },
        params: body
    })
        .then(result => result)
}

module.exports = {playlist}
