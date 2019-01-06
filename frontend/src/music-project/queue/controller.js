const model = require('./model')
const view = require('./view')
const currentCtrl = require('../current/controller')
const {signout} = require('../../login-signup/controller')

function init() {
    const userId = localStorage.getItem('userId')
    console.log(userId, 'from controller queue')
    return model.all(`/users/${userId}/queues`)
    .then(result => {
        if(result.data.length > 0) return displayQueue(result.data)
    })
    .catch(err => {
        if (err.response.status == 401) return signout()
        console.error(err)
    })
}

function displayQueue(albums){
    currentCtrl.init(albums[0])
    if (albums[1]){
        document.querySelector('#upNext').innerHTML += view.albumTemplate(albums[1])
        document.querySelector('#upNext .emptyState').remove()
    }
}


function addToDbQueue(albumId) {
    const album = document.querySelector(`div[data-id="${albumId}"]`)
    const userId = localStorage.getItem('userId')
    const body = {
        user_id: userId,
        album: album.children[1].children[0].textContent,
        artist: album.children[1].children[1].textContent,
        img: album.children[0].getAttribute('src'),
        spotify_album_id: albumId
    }
    document.querySelector('.autocomplete').innerHTML = ''
   
    return model.add(body)
    .then(result => {
        if (document.querySelector('#current .emptyState')) return addToLocation(result.data[0], '#current')
        if (document.querySelector('#upNext .emptyState')) return addToLocation(result.data[0], '#upNext')
        let div = document.createElement('div')
        div.innerHTML = `<p class="alert">${result.data[0].album} added to queue</p>`
        document.querySelector('body').appendChild(div)
    })
    .catch(err => {
        console.error(err)
        if(err.response){
            if(err.response.status == 401) return signout()
        }
    })
}

function addToLocation(album, location){
    if (document.querySelector(`${location} .emptyState`)) document.querySelector(`${location} .emptyState`).remove()
    document.querySelector(location).innerHTML += view.albumTemplate(album)
}

module.exports = {init, addToDbQueue}