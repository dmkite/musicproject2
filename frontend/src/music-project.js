const axios = require('axios')
const baseURL = 'http://localhost:3000'

function init(){
    const [url, queryParam] = document.location.href.split('?')
    const splitQueries = queryParam.split('&')
    const body = {}
    splitQueries.forEach(item => {
        item = item.split('=')
        body[item[0]] = item[1]
        })


    return axios.post(`${baseURL}/auth/spotify`, {
        grant_type: "authorization_code",
        code: body.code,
        redirect_uri: `http://127.0.0.1:8080/music-project.html`
    })
    .then(result => {
        console.log(result)
        localStorage.setItem('access_token', result.data.access_token)
        localStorage.setItem('refresh_token', result.data.refresh_token)
        return axios('https://api.spotify.com/v1/me', {
            method: 'get',
            headers:{
                Authorization: `Bearer ${result.data.access_token}`
            }
        })

    })
    .then(result => {
        console.log(result)
        personalize(result.data)
    })
    .catch(err => {
        console.log(err)
    })
}

function personalize(userObj){
    document.querySelector('.welcome').textContent += `, ${userObj.display_name}!`
    if(userObj.images[0]) document.querySelector('header').innerHTML += `<div id="profPic" style="background-image: url('${userObj.images[0]}';")></div>`
}


module.exports = {init}