const model = require('./model')
const searchCtrl = require('./search/controller')
const queueCtrl = require('./queue/controller')
const currentCtrl = require('./current/controller')


function init() {
    if(!localStorage.getItem('access_token')){
        const body = createBodyFromCode()    
        return model.getToken(body)
        .then(result => {
            localStorage.setItem('access_token', result.data.access_token)
            localStorage.setItem('refresh_token', result.data.refresh_token)
            prepDashboard()
            
            return getUserInfo(result.data.access_token)
        })
        .then(() => {
            const token = `Bearer: ${localStorage.getItem('token')}`
            return model.authenticate(token)
        })
        .then(result => {
            localStorage.setItem('userId', result.data.id)
        })
    }
    else {
        getUserInfo()
        prepDashboard()
        const token = `Bearer: ${localStorage.getItem('token')}`
        return model.authenticate(token)
        .then(result => {
            localStorage.setItem('userId', result.data.id)
        })
    }
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
    return model.getUserInfo(accessToken)
    .then(result => {
        personalize(result)
        })
    .catch(err => {
        const refreshToken = localStorage.getItem('refresh_token')
        return model.refreshToken(refreshToken)
        .then(result => {
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


function prepDashboard(){
    currentCtrl.init()
    document.querySelector('#musicSearch input').addEventListener('keyup', searchCtrl.init)
    queueCtrl.init()

}
module.exports = {init, getUserInfo}

