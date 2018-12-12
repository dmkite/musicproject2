const model = require('./model')

function init() {
    if(!localStorage.getItem('access_token')){
        const body = createBodyFromCode()    
        return model.getToken(body)
        .then(result => {
            localStorage.setItem('access_token', result.data.access_token)
            localStorage.setItem('refresh_token', result.data.refresh_token)
            return getUserInfo(result.data.access_token)
        })
    }
    else getUserInfo()
    
}

function createBodyFromCode(){
    const [url, queryParam] = document.location.href.split('?')
    const splitQueries = queryParam.split('&')
    const body = {}
    splitQueries.forEach(item => {
        item = item.split('=')
        body[item[0]] = item[1]
    })
    return body
}

function getUserInfo(accessToken){
    console.log(accessToken)
    return model.getUserInfo(accessToken)
    .then(result => {
        console.log(result, '************************************')
        personalize(result)
        })
    .catch(err => {
        console.log(err, '-------------------')
        const refreshToken = localStorage.getItem('refresh_token')
        return model.refreshToken(refreshToken)
        .then(result => {
            console.log(result)
            useNewToken(result)
        })
    })
}

function useNewToken(newToken){
    return model.getUserInfo(newToken)
    .then(result => {
        personalize(result.data)
    })  
    .catch(err => console.log(err))
}

function personalize(userObj) {
    document.querySelector('.welcome').textContent += `, ${userObj.display_name}!`
    if (userObj.images[0]) document.querySelector('header').innerHTML += `<div id="profPic" style="background-image: url('${userObj.images[0]}';")></div>`
}

function createQuery(){
    const val = encode()
    const query = `?q=${val}&type=album%2Cartist&limit=5`
    return model.searchForAlbum(query)
}

function encode() {
    let val = document.querySelector('#musicSearch input').value
    val = val.split(' ')
    val = val.join('%20')
    return val
}

module.exports = {init, getUserInfo}

