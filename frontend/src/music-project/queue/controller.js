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
        if(result.data[0]) return displayQueue(result.data)
    })
    .catch(err => {
        console.error(err)
    })
}

function displayQueue(albums){
    currentCtrl.init(albums[0])
    if(albums[1]) document.querySelector('#upNext').innerHTML += view.albumTemplate(albums[1])
    else upNext.innerHTML += '<p class="emptyState">Your queue is quite empty</p>'
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
        if(result.data[0].is_current) return addToCurrent(result.data[0])
        let div = document.createElement('div')
        div.innerHTML = `<p class="alert">${result.data[0].album} added to queue</p>`
        document.querySelector('body').appendChild(div)
    })
    .catch(err => console.error(err))
}

function addToCurrent(album){
    document.querySelector('#current .emptyState').remove()
    document.querySelector('#current').innerHTML += view.albumTemplate(album)
}

module.exports = {init, addToDbQueue}