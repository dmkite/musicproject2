const axios = require('axios')
const baseURL = 'http://localhost:3000'
const ctrl = require('./controller')

function getToken(body){
    return axios.post(`${baseURL}/auth/spotify`, {
        grant_type: "authorization_code",
        code: body.code,
        redirect_uri: `http://127.0.0.1:8080/music-project.html`
    })
    .then(result => result)
    .catch(err => {
        console.log(err)
        console.log(err.response.data)
    })
}

function getUserInfo(accessToken) {
    return axios('https://api.spotify.com/v1/me', {
        method: 'get',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then(result => result)
    .catch(err => {
        console.log(err)
    })
}

function refreshToken(refreshToken){
    return axios.post(`${baseURL}/auth/spotify`, {
        grant_type: 'refresh_token',
        refresh_token: refreshToken
    })
    .then(result => {
        localStorage.setItem('access_token', result.data.access_token)
        // return ctrl.getUserInfo(result.data.access_token)
        return result.data.access_token
    })
    .catch(err => {
        console.error(err)
    })
}
function searchForAlbum(query) {
    return axios('https://api.spotify.com/v1/search' + query, {
        method: 'get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    })
        .then(result => {
            autocomplete(result.data)
        })
        .catch(err => { console.log(err) })
}

module.exports = {getToken, getUserInfo, refreshToken, searchForAlbum}