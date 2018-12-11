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
    })
    .catch(err => {
        console.log(err)
    })
}

/*
Left off with an error sending Authorization Code in exchange for a token. Issues: 'Authorization code expired',  TypeError: converting circular structure to JSON', 'invalid_grant invalid authorization code'

*/

module.exports = {init}