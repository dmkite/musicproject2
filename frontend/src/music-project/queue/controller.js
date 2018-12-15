const model = require('./model')
const view = require('./view')

function init() {
    const userId = localStorage.getItem('userId')
    return model.all(`/users/${userId}/queues`)
    .then(result => {
        const upNext = document.querySelector('#upNext')
        if (result.data[0] && !result.data[0].is_current) upNext.innerHTML += view.albumTemplate(result.data[0])
        else upNext.innerHTML += '<p class="emptyState">Your queue is quite empty</p>'
    })
    .catch(err => {
        console.error(err)
    })
}

function addToDbQueue(albumId) {
    const album = document.querySelector(`div[data-id="${albumId}"]`)
    const userId = localStorage.getItem('userId')
    const body = {
        user_id: userId,
        album: album.children[1].textContent,
        artist: album.children[2].textContent,
        img: album.children[0].getAttribute('src'),
        album_id: albumId
    }
    document.querySelector('.autocomplete').innerHTML = ''
   
    return model.add(body)
    .then(result => {
        console.log(result, '============================')
        if(result.data[0].is_current) return addToCurrent(result.data[0])
        document.querySelector('body').innerHTML += `<div class="alert">${result.data.album} added to queue</div>`
    })
    .catch(err => console.error(err))
}

function addToCurrent(album){
    document.querySelector('#current .emptyState').remove()
    document.querySelector('#current').innerHTML += view.albumTemplate(album)
}

module.exports = {init, addToDbQueue}