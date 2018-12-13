const axios = require('axios')

function searchForAlbum(query) {
    return axios('https://api.spotify.com/v1/search' + query, {
        method: 'get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    })
        .then(result => result)
        .catch(err => { console.error(err) })
}

function getAlbum(albumId){
    return axios('https://api.spotify.com/v1/albums/' + albumId, {
        method: 'get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    })
    .then(result => result)
    .catch(err => {console.error(err)})
}

module.exports = {searchForAlbum, getAlbum}