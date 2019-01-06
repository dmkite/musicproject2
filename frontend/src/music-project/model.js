const axios = require('axios')
const baseURL = 'http://dmkite-music-project.herokuapp.com'

function getToken(body){
    return axios.post(`${baseURL}/auth/spotify`, {
        grant_type: "authorization_code",
        code: body.code,
        redirect_uri: window.location.hostname === 'localhost' ? 'http://localhost:8080/music-project.html' : `http://dmkitemusic-project6.surge.sh/music-project.html`
    })
    .then(result => result)
    .catch(err => {
        console.error(err)
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
        console.error(err)
    })
}

function refreshToken(refreshToken){
    return axios.post(`${baseURL}/auth/spotify`, {
        grant_type: 'refresh_token',
        refresh_token: refreshToken
    })
    .then(result => {
        localStorage.setItem('access_token', result.data.access_token)
        return result.data.access_token
    })
    .catch(err => {
        console.error(err)
    })
}

function authenticate(token) {
    return axios(`${baseURL}/auth/token`, {
        method: 'get',
        headers: {
            Authorization: token
        }
    })
    .then(result => result)
}


module.exports = {getToken, getUserInfo, refreshToken, authenticate}