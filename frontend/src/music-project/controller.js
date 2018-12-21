const model = require('./model')
const searchCtrl = require('./search/controller')
const queueCtrl = require('./queue/controller')
const currentCtrl = require('./current/controller')
const hitsCtrl = require('./hits/controller')
const dataCtrl = require('./data/controller')
const loginSignup = require('../login-signup/controller')

function init() {
    document.querySelector('#signout').addEventListener('click', loginSignup.signout)
    const body = createBodyFromURL()   
    localStorage.setItem('access_token', body.access_token)
    getUserInfo(body.access_token) 
    prepDashboard()
    const token = `Bearer: ${localStorage.getItem('token')}`
    return model.authenticate(token)
    .then(result => {
        localStorage.setItem('userId', result.data.userInfo.id)
        document.querySelector('.welcome').textContent += `, ${result.data.userInfo.f_name}`
        const div = document.createElement('div')
        div.textContent = result.data.userInfo.f_name[0]
        div.classList.add('userLetter')
        document.querySelector('body').appendChild(div)
    })
}

function createBodyFromURL(){
    const [url, queryParam] = document.location.href.split('#')
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
        personalize(result.data)
        })
    .catch(err => {
        loginSignup.signout()
    })
}

function personalize(userObj) {
    localStorage.setItem('spotifyId', userObj.id)
    if (userObj.images[0]) document.querySelector('header').innerHTML += `<div id="profPic" style="background-image: url('${userObj.images[0]}';")></div>`
}


function prepDashboard(){
    currentCtrl.init()
    document.querySelector('#musicSearch input').addEventListener('keyup', searchCtrl.init)
    queueCtrl.init()
    hitsCtrl.init()
    dataCtrl.init()
}

module.exports = {init, getUserInfo}

