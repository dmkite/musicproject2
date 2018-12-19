const model = require('./model')
const view = require('./view')
const currentCtrl = require('../current/controller')

function init() {
    const userId = localStorage.getItem('userId')
    return model.all(`/users/${userId}/queues`)
    .then(result => {
        // const upNext = document.querySelector('#upNext')
        // if (result.data[0] && !result.data[0].is_current) upNext.innerHTML += view.albumTemplate(result.data[0])
        //if(result.data[0] && !result.data[0].is_current) result.data[0].is_current = true
        // else upNext.innerHTML += '<p class="emptyState">Your queue is quite empty</p>'
        if(result.data.length > 0) return displayQueue(result.data)
    })
    .catch(err => {
        console.error(err)
    })
}

function displayQueue(albums){
    let currentFound = false
    for(let album of albums){
        if (album.is_current) {
            currentCtrl.init(album)
            currentFound = true
        }
    }
    if(!currentFound){
        albums[0].is_current = true
        return displayQueue(albums)
    }
    if(!albums[0].is_current) document.querySelector('#upNext').innerHTML += view.albumTemplate(albums[0])
    else if (albums[1]) document.querySelector('#upNext').innerHTML += view.albumTemplate(albums[1])
    else if(!document.querySelector('#upNext .emptyState')) upNext.innerHTML += '<p class="emptyState">Your queue is quite empty</p>'
}


function addToDbQueue(albumId) {
    const album = document.querySelector(`div[data-id="${albumId}"]`)
    const userId = localStorage.getItem('userId')
    const body = {
        user_id: userId,
        album: album.children[1].textContent,
        artist: album.children[2].textContent,
        img: album.children[0].getAttribute('src'),
        spotify_album_id: albumId
    }
    document.querySelector('.autocomplete').innerHTML = ''
   
    return model.add(body)
    .then(result => {
        if(result.data[0].is_current) return addToLocation(result.data[0], '#current')
        if(document.querySelector('#upNext .emptyState')) return addToLocation(result.data[0], '#upNext')
        let div = document.createElement('div')
        div.innerHTML = `<p class="alert">${result.data[0].album} added to queue</p>`
        document.querySelector('body').appendChild(div)
    })
    .catch(err => console.error(err))
}

function addToLocation(album, location){
    if (document.querySelector(`${location} .emptyState`)) document.querySelector(`${location} .emptyState`).remove()
    document.querySelector(location).innerHTML += view.albumTemplate(album)
}

module.exports = {init, addToDbQueue}