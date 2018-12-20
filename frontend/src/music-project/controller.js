const model = require('./model')
const searchCtrl = require('./search/controller')
const queueCtrl = require('./queue/controller')
const currentCtrl = require('./current/controller')
const hitsCtrl = require('./hits/controller')
const dataCtrl = require('./data/controller')
const loginSignup = require('../login-signup/controller')

/*
access_token=BQAirB6jOzP6OuNr9JbFhsQLZrgk7z6H_4IjEiqKXLOjU9R3o9yQqcJbCIwx_WSm2sHQoE6BJRSo9qroH1atADY7FhIs9m3iCOMYbHUTwVphs0UrjEWVz6qHkacqJQNEznwPWyj_tC44Sy_VZOOGYb-xd8byI4J95GhFzbN6zggshYI2a0OYIklnhnCM
&token_type=Bearer
&expires_in=3600
&state=9e85mdGsBSXFJhHd
*/

function init() {
    document.querySelector('#signout').addEventListener('click', loginSignup.signout)
    // if(!localStorage.getItem('access_token')){
    const body = createBodyFromURL()   
    localStorage.setItem('access_token', body.access_token)
    getUserInfo(body.access_token) 
    prepDashboard()
    const token = `Bearer: ${localStorage.getItem('token')}`
    return model.authenticate(token)
    .then(result => {
        localStorage.setItem('userId', result.data.userInfo.id)
        document.querySelector('.welcome').textContent += `, ${result.data.userInfo.f_name}`
    })
        // return model.getToken(body)
        // .then(result => {
        //     console.log(result)
        //     // localStorage.setItem('access_token', result.data.access_token)
        //     // localStorage.setItem('refresh_token', result.data.refresh_token)
        //     // prepDashboard()
        //     // return getUserInfo(result.data.access_token)
        // })
    //     .then(() => {
    //         const token = `Bearer: ${localStorage.getItem('token')}`
    //         return model.authenticate(token)
    //     })
    //     .then(result => {
    //         localStorage.setItem('userId', result.data.id)
    //     })
    // }
    // else {
    //     getUserInfo()
    //     prepDashboard()
    //     const token = `Bearer: ${localStorage.getItem('token')}`
    //     return model.authenticate(token)
    //     .then(result => {
    //         localStorage.setItem('userId', result.data.id)
    //     })
    //     .catch( () => loginSignup.signout())
    // }
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
        console.log(result)
        personalize(result.data)
        })
    .catch(err => {
        loginSignup.signout()
        // const refreshToken = localStorage.getItem('refresh_token')
        // return model.refreshToken(refreshToken)
        // .then(result => {
        //     useNewToken(result)
        // })
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

